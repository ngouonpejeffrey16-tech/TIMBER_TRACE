import * as React from 'react';

export interface ListingFact { label: string; value: string; }
export interface ListingCardProps {
  image: string;
  price: number | string;
  acres?: number;
  location: string;
  title?: string;
  status?: string;
  /** Shows the "Title verified" trust badge. @default false */
  verified?: boolean;
  /** Up to ~3 parcel facts shown in a footer row. */
  facts?: ListingFact[];
  saved?: boolean;
  onSave?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Signature land-listing card: image, acreage, price, location, parcel facts.
 * @startingPoint section="Marketplace" subtitle="Land listing card" viewport="700x400"
 */
export function ListingCard(props: ListingCardProps): JSX.Element;
