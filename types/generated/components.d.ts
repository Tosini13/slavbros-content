import type { Schema, Struct } from '@strapi/strapi';

export interface OfferFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_offer_feature_items';
  info: {
    displayName: 'feature-item';
    icon: '';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface OfferFeatures extends Struct.ComponentSchema {
  collectionName: 'components_offer_features';
  info: {
    displayName: 'features';
    icon: 'bulletList';
  };
  attributes: {
    list: Schema.Attribute.Component<'offer.feature-item', true>;
  };
}

export interface OfferPrice extends Struct.ComponentSchema {
  collectionName: 'components_offer_prices';
  info: {
    description: '';
    displayName: 'price';
    icon: 'command';
  };
  attributes: {
    old_price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'offer.feature-item': OfferFeatureItem;
      'offer.features': OfferFeatures;
      'offer.price': OfferPrice;
    }
  }
}
