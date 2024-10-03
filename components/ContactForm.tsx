'use client';

import { useState, FormEvent, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  trigger?: ReactNode;
  showTrigger?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ trigger, showTrigger = true }) => {
  const { toast } = useToast();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Email sent successfully! Will get back to you shortly.',
          variant: 'default',
        });
        setName('');
        setEmail('');
        setMessage('');
        if (showTrigger) {
          setOpen(false);
        }
      } else {
        toast({
          title: 'Error',
          description: 'There was an error sending your message, Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error sending your message.',
        variant: 'destructive',
      });
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="m-4 p-4 max-w-[500px] lg:max-w-[700px] mx-auto space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="janedoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant='default' size='lg2'>Send</Button>
    </form>
  );

  if (!showTrigger) {
    return <>{formContent}</>;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? <Button variant='default' size='lg' onClick={() => setOpen(true)}>Reach out for a Free Session</Button>} 
      </DialogTrigger>
      <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[500px] bg-white rounded-lg shadow-lg">
          <DialogClose asChild>
            <button className="absolute right-4 top-4 rounded-sm border border-border bg-background p-1 transition-all hover:bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M11.8536 3.14645L3.14645 11.8536"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.14645 3.14645L11.8536 11.8536"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </DialogClose>
          <div className="p-6">{formContent}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
