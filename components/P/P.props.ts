import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size: 'f14w300' | 'f16w200' | 'f16w300' | 'f14w700' | 'f16w700';
}
