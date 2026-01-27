'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'shse1502@colorado.edu',
      href: 'mailto:shse1502@colorado.edu',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '(720) 260-6977',
      href: 'tel:+17202606977',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Boulder, CO (Open to Relocate)',
      href: '#',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'shivaraj-senthil-rajan',
      href: 'https://www.linkedin.com/in/shivaraj-senthil-rajan-2b8898227/',
      color: 'text-blue-700'
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'Shiva250503ss',
      href: 'https://github.com/Shiva250503ss',
      color: 'text-gray-800'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Let's Connect! 🤝</h2>
        <p className="text-muted-foreground">
          Whether it's about job opportunities, collaborations, or just geeking out about AI - I'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For 🎯</h3>
          <p className="text-sm text-muted-foreground">
            • AI Engineering roles • Data Science opportunities • Machine Learning projects
            • Data Engineering positions • Open source collaborations
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          Fun fact: I'm always up for a chat about cricket stats or the latest ML papers! 🏏📊
        </p>
      </div>
    </div>
  );
}
