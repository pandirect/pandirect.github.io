import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = {
  item: TCase;
}

const Case: React.FC<Props> = ({ item }) => {
  const t = useTranslations('common');

  return (
    <Link href={`/case-studies/${item.slug}`} className="block h-full">
      <Card className="group h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 bg-secondary/20 border-secondary">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={item.detail.image}
            alt={item.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <Badge
            className="bg-primary/20 text-primary border-0 whitespace-nowrap absolute top-4 right-4">{item.detail.type}</Badge>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white mb-2">{item.card.title}</h3>

            </div>
            <p className="text-gray-400 mb-4 text-sm">{item.card.subtitle}</p>
          </div>
          <div className="inline-flex items-center text-primary font-semibold group-hover:underline mt-auto pt-4 border-t border-secondary">
            {t('cases.buttons.show')}<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export { Case };