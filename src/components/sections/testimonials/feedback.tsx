import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  item: TTestimonial;
}

const Feedback: React.FC<Props> = ({ item }) => {
  return (
    <CardContent className="p-6">
      <blockquote
        className="text-lg text-light-gray border-l-4 border-primary pl-4 mb-6">
        <ReactMarkdown>{item.text}</ReactMarkdown>
      </blockquote>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src={item.avatar}
                       alt={item.client}
                       data-ai-hint="person"/>
          <AvatarFallback>{item.initials}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-semibold">{item.client}</p>
          <p className="text-sm text-muted-foreground">{item.post}</p>
        </div>
      </div>
    </CardContent>
  );
}

export { Feedback };