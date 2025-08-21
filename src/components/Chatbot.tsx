import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your FoodLink assistant. I can help you with food sharing, finding NGOs, or answer questions about food safety. How can I help you today?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message: string): string => {
    if (message.includes('spoiled') || message.includes('expired') || message.includes('fresh')) {
      return 'To check if food is spoiled, you can use our AI Food Checker feature! Upload a photo of your food and I\'ll analyze it for signs of spoilage. Generally, look for changes in color, texture, smell, or mold growth.';
    } else if (message.includes('ngo') || message.includes('charity') || message.includes('donate')) {
      return 'Great! You can find nearby NGOs using our NGO Finder feature. We have partnered with various local charities and food banks. Would you like me to help you find organizations in your area?';
    } else if (message.includes('post') || message.includes('food') || message.includes('surplus')) {
      return 'To post surplus food, go to the "Post Food" section and fill out the form with details about your food including type, quantity, pickup location, and time available. Don\'t forget to add photos!';
    } else if (message.includes('help') || message.includes('how')) {
      return 'I can help you with: 📱 Posting surplus food, 🏢 Finding NGOs near you, 🔍 Checking food quality with AI, 📊 Understanding our impact. What would you like to know more about?';
    } else {
      return 'Thank you for your message! I\'m here to help with food sharing, finding NGOs, and food safety questions. Could you please be more specific about what you\'d like help with?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 z-40 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
        size="sm"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 h-96 bg-background border border-border rounded-lg shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <Card className="h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                FoodLink Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full pb-4">
            <ScrollArea className="flex-1 pr-2">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.isBot ? (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        ) : (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground p-3 rounded-lg max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="flex gap-2 mt-4">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Chatbot;