import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from '@keystone-next/cloudinary';

// config for cloudinary
export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
};

// type of list is imported from keystone... 
// field names are custom, but field types are imported from keystone
export const ProductImage = list({
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source'
        }),
        altText: text(),
        // references which item the field product corresponds to
        product: relationship({ref: 'Product.photo'}),
    },
    ui: {
        listView: {
            initialColumns: ['image', 'altText', 'product']
        }
    }
});