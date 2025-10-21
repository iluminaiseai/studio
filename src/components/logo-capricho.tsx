
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

// Este componente está preparado para receber uma imagem PNG.
// Para que funcione, você deve:
// 1. Criar uma pasta `public` na raiz do seu projeto.
// 2. Colocar o arquivo da sua logo (ex: logo.png) dentro da pasta `public`.
// 3. O 'src' da imagem abaixo está como '/logo-capricho.png'. Certifique-se de que o nome do seu arquivo é o mesmo.

type LogoCaprichoProps = {
  className?: string;
};

export function LogoCapricho({ className }: LogoCaprichoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/logo-capricho.png"
        alt="Logo Capricho"
        width={100} // Ajuste a largura conforme necessário
        height={50} // Ajuste a altura conforme necessário
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
