// Item property configuration — assign rarity and item details to each plant
// Rule: common → Food, rare → Clothing, epic → Home decoration
// Different parks have different clothing and decorations, encouraging cross-park exploration

import type { ClothingSlot, DecorationSlot, Rarity } from "../models/types";

interface ItemProperty {
  rarity: Rarity;
  /** Clothing slot (rare plants only) */
  clothingSlot?: ClothingSlot;
  /** Decoration slot (epic plants only) */
  decorationSlot?: DecorationSlot;
  /** Decoration SVG overlay (clothing worn on character / decoration placed at home) */
  decorationSvg?: string;
  /** Food satiety value (common plants only) */
  satiety?: number;
}

// ============================================================================
// Clothing SVG templates — overlaid on the character (viewBox="0 0 100 100")
// Character SVG center is around (50, 40-70) region
// ============================================================================

// Headwear: placed on top of head (50, 15-25)
const headwearSvgs: Record<string, string> = {
  // Flower crown
  flowerCrown: `<g transform="translate(50,18)"><circle cx="-15" r="4" fill="#FFB6C1"/><circle cx="0" r="5" fill="#FF8FA3"/><circle cx="15" r="4" fill="#FFB6C1"/><circle cx="-8" cy="-3" r="3" fill="#FFE0E6"/><circle cx="8" cy="-3" r="3" fill="#FFE0E6"/><path d="M-18,0 Q0,-8 18,0" stroke="#7C9885" stroke-width="2" fill="none"/></g>`,
  // Leaf hat
  leafHat: `<g transform="translate(50,15)"><ellipse cx="0" cy="0" rx="25" ry="8" fill="#7C9885"/><ellipse cx="-8" cy="-5" rx="12" ry="6" fill="#8FAB85" transform="rotate(-20)"/><ellipse cx="8" cy="-5" rx="12" ry="6" fill="#6B8E5A" transform="rotate(20)"/><ellipse cx="0" cy="-8" rx="10" ry="5" fill="#9DBF8A"/></g>`,
  // Sakura pin
  sakuraPin: `<g transform="translate(50,20)"><g transform="translate(-10,0)"><circle r="4" fill="#FFB7C5"/><circle r="3" fill="#FF9EB1" transform="translate(0,-3)"/></g><g transform="translate(10,0)"><circle r="4" fill="#FFB7C5"/><circle r="3" fill="#FF9EB1" transform="translate(0,-3)"/></g></g>`,
  // Magnolia crown
  magnoliaCrown: `<g transform="translate(50,16)"><ellipse cx="-12" cy="0" rx="6" ry="8" fill="#FFF8E7" transform="rotate(-15)"/><ellipse cx="0" cy="-3" rx="7" ry="9" fill="#FFFCF5"/><ellipse cx="12" cy="0" rx="6" ry="8" fill="#FFF8E7" transform="rotate(15)"/></g>`,
  // Wintersweet hat
  wintersweetHat: `<g transform="translate(50,15)"><ellipse cx="0" cy="0" rx="22" ry="7" fill="#E8A030"/><circle cx="-12" cy="-2" r="3" fill="#FFD700"/><circle cx="0" cy="-4" r="3.5" fill="#FFC700"/><circle cx="12" cy="-2" r="3" fill="#FFD700"/></g>`,
  // Plum crown
  plumCrown: `<g transform="translate(50,17)"><circle cx="-14" r="4" fill="#E8B4B8"/><circle cx="-5" cy="-4" r="3.5" fill="#D4A5A5"/><circle cx="5" cy="-4" r="3.5" fill="#D4A5A5"/><circle cx="14" r="4" fill="#E8B4B8"/><circle cx="0" cy="2" r="3" fill="#C08080"/></g>`,
  // Bamboo hat
  bambooHat: `<g transform="translate(50,12)"><path d="M-28,8 Q0,-12 28,8 L20,12 Q0,0 -20,12 Z" fill="#6B8E5A"/><line x1="-20" y1="6" x2="0" y2="-6" stroke="#5A7D4A" stroke-width="1"/><line x1="0" y1="-6" x2="20" y2="6" stroke="#5A7D4A" stroke-width="1"/></g>`,
  // Winter jasmine wreath
  jasmineCrown: `<g transform="translate(50,18)"><path d="M-20,0 Q0,-6 20,0" stroke="#7C9885" stroke-width="2" fill="none"/><circle cx="-10" cy="-2" r="2.5" fill="#FFD966"/><circle cx="0" cy="-4" r="2.5" fill="#FFD966"/><circle cx="10" cy="-2" r="2.5" fill="#FFD966"/></g>`,
  // Osmanthus crown
  osmanthusCrown: `<g transform="translate(50,18)"><path d="M-18,0 Q0,-5 18,0" stroke="#7C9885" stroke-width="1.5" fill="none"/><circle cx="-8" cy="-2" r="2" fill="#FFB347"/><circle cx="0" cy="-4" r="2" fill="#FFB347"/><circle cx="8" cy="-2" r="2" fill="#FFB347"/><circle cx="-12" cy="0" r="1.5" fill="#FFA030"/><circle cx="12" cy="0" r="1.5" fill="#FFA030"/></g>`,
  // Camellia pin
  camelliaPin: `<g transform="translate(50,20)"><circle cx="-10" r="5" fill="#C44569"/><circle cx="-10" r="3" fill="#E5546B"/><circle cx="10" r="5" fill="#C44569"/><circle cx="10" r="3" fill="#E5546B"/></g>`,
  // Silk tree puff
  silkTreePuff: `<g transform="translate(50,18)"><circle cx="-12" r="4" fill="#FF6B9D" opacity="0.9"/><circle cx="0" r="5" fill="#FF8FB1" opacity="0.9"/><circle cx="12" r="4" fill="#FF6B9D" opacity="0.9"/><line x1="-12" y1="4" x2="12" y2="4" stroke="#FF6B9D" stroke-width="0.5" opacity="0.5"/></g>`,
  // Maple hat
  mapleHat: `<g transform="translate(50,15)"><path d="M-22,8 L-18,-2 L-10,2 L0,-8 L10,2 L18,-2 L22,8 Z" fill="#D4622A"/><path d="M0,-8 L0,6" stroke="#B5522A" stroke-width="1"/></g>`,
  // Crabapple crown
  crabappleCrown: `<g transform="translate(50,17)"><circle cx="-13" r="4" fill="#F4A0B0"/><circle cx="-4" cy="-4" r="3.5" fill="#E89199"/><circle cx="4" cy="-4" r="3.5" fill="#E89199"/><circle cx="13" r="4" fill="#F4A0B0"/><circle cx="0" cy="0" r="2" fill="#FFD700"/></g>`,
};

// Outfits: worn on character body (50, 50-70)
const outfitSvgs: Record<string, string> = {
  // Scarf
  scarf: `<g transform="translate(50,48)"><path d="M-18,0 Q0,-2 18,0 L14,10 Q0,8 -14,10 Z" fill="#E5546B"/><line x1="-12" y1="2" x2="-8" y2="8" stroke="#C04560" stroke-width="1"/><line x1="0" y1="0" x2="0" y2="8" stroke="#C04560" stroke-width="1"/><line x1="8" y1="2" x2="12" y2="8" stroke="#C04560" stroke-width="1"/></g>`,
  // Cape
  cape: `<g transform="translate(50,45)"><path d="M-25,0 Q0,-3 25,0 L20,25 Q0,28 -20,25 Z" fill="#5B7C99" opacity="0.85"/><path d="M-25,0 Q0,-3 25,0" stroke="#4A6B85" stroke-width="1" fill="none"/></g>`,
  // Vest
  vest: `<g transform="translate(50,48)"><path d="M-15,0 L-12,18 L12,18 L15,0 L5,0 L0,5 L-5,0 Z" fill="#9B6B99"/><circle cx="-8" cy="8" r="1" fill="#7C5A7A"/><circle cx="0" cy="8" r="1" fill="#7C5A7A"/><circle cx="8" cy="8" r="1" fill="#7C5A7A"/></g>`,
  // Flower sash
  flowerSash: `<g transform="translate(50,45)"><path d="M-15,2 Q0,0 15,2" stroke="#7C9885" stroke-width="3" fill="none"/><circle cx="-10" cy="1" r="2.5" fill="#FFB6C1"/><circle cx="0" cy="-1" r="3" fill="#FF8FA3"/><circle cx="10" cy="1" r="2.5" fill="#FFB6C1"/></g>`,
};

// Accessories: small pendants (50, 55-65)
const accessorySvgs: Record<string, string> = {
  // Brooch
  brooch: `<g transform="translate(50,52)"><circle r="4" fill="#5B7C99"/><circle r="2.5" fill="#E8E8F0"/><circle r="1" fill="#5B7C99"/></g>`,
  // Leaf necklace
  leafNecklace: `<g transform="translate(50,52)"><path d="M-8,0 Q0,2 8,0" stroke="#7C9885" stroke-width="1" fill="none"/><ellipse cx="0" cy="4" rx="3" ry="5" fill="#7C9885" transform="rotate(0)"/><line x1="0" y1="-1" x2="0" y2="7" stroke="#6B8E5A" stroke-width="0.5"/></g>`,
  // Fruit charm
  fruitCharm: `<g transform="translate(50,53)"><line x1="-5" y1="0" x2="5" y2="0" stroke="#8B6914" stroke-width="1"/><circle cx="-3" cy="4" r="2.5" fill="#E5546B"/><circle cx="3" cy="4" r="2.5" fill="#FFB347"/></g>`,
  // Star badge
  starBadge: `<g transform="translate(50,52)"><path d="M0,-4 L1.2,-1 L4,0 L1.2,1 L0,4 L-1.2,1 L-4,0 L-1.2,-1 Z" fill="#FFD700" stroke="#D4A000" stroke-width="0.5"/></g>`,
  // Ginkgo pin
  ginkgoPin: `<g transform="translate(50,52)"><path d="M-4,2 Q-5,-3 0,-4 Q5,-3 4,2 Q2,3 0,2 Q-2,3 -4,2 Z" fill="#FFD700" stroke="#D4A000" stroke-width="0.5"/></g>`,
  // Lotus charm
  lotusCharm: `<g transform="translate(50,53)"><g transform="scale(0.6)"><path d="M0,-6 Q-3,-4 -4,0 Q0,2 4,0 Q3,-4 0,-6" fill="#FFB6C1"/><path d="M0,-4 Q-2,-2 -2,0 Q0,1 2,0 Q2,-2 0,-4" fill="#FF9EB1"/></g></g>`,
};

// Home decoration SVG — placed in character's home background (character centered, decorations around)
// furniture: furniture (left and right sides), plant: plants (corners), scenery: scenes (background)
const decorationSvgs: Record<string, string> = {
  // Pine bonsai (bottom-left corner)
  pineBonsai: `<g transform="translate(15,75)"><rect x="-4" y="8" width="8" height="6" rx="1" fill="#8B6914"/><path d="M0,8 L-8,2 L-5,2 L-10,-3 L-6,-3 L-8,-8 L0,-12 L8,-8 L6,-3 L10,-3 L5,2 L8,2 Z" fill="#5A7D4A"/></g>`,
  // Lotus pond (bottom)
  lotusPond: `<g transform="translate(50,82)"><ellipse rx="30" ry="5" fill="#4A90B8" opacity="0.3"/><ellipse cx="-12" rx="8" ry="3" fill="#5A9A78" opacity="0.6"/><ellipse cx="10" rx="6" ry="2.5" fill="#5A9A78" opacity="0.6"/><g transform="translate(-12,-3) scale(0.5)"><path d="M0,-6 Q-3,-4 -4,0 Q0,2 4,0 Q3,-4 0,-6" fill="#FFB6C1"/></g></g>`,
  // Metasequoia tree (top-left corner)
  metasequoiaTree: `<g transform="translate(15,30)"><rect x="-2" y="0" width="4" height="25" fill="#8B6914"/><path d="M0,-5 L-8,0 L-4,0 L-10,8 L-4,8 L-8,16 L0,10 L8,16 L4,8 L10,8 L4,0 L8,0 Z" fill="#C0532A"/></g>`,
  // Bamboo (right side)
  bambooPlant: `<g transform="translate(85,40)"><rect x="-1.5" y="-15" width="3" height="40" fill="#7C9885"/><rect x="-1.5" y="-5" width="3" height="2" fill="#5A7D4A"/><rect x="-1.5" y="5" width="3" height="2" fill="#5A7D4A"/><ellipse cx="0" cy="-20" rx="3" ry="8" fill="#7C9885" transform="rotate(-20)"/><ellipse cx="3" cy="-18" rx="3" ry="7" fill="#8FAB85" transform="rotate(30)"/></g>`,
  // Pomegranate pot (bottom-right corner)
  pomegranatePot: `<g transform="translate(85,78)"><rect x="-5" y="5" width="10" height="6" rx="1" fill="#A0522D"/><circle cx="-2" cy="0" r="3" fill="#C04560"/><circle cx="2" cy="-2" r="3" fill="#E5546B"/><path d="M-3,2 L0,-5 L3,2" stroke="#7C9885" stroke-width="1" fill="none"/></g>`,
  // Wisteria arch (top)
  wisteriaArch: `<g transform="translate(50,15)"><path d="M-35,0 Q0,-5 35,0" stroke="#8B6914" stroke-width="2" fill="none"/><circle cx="-20" cy="-2" r="2" fill="#B58CC4"/><circle cx="-10" cy="-4" r="2.5" fill="#A370BF"/><circle cx="0" cy="-5" r="2.5" fill="#B58CC4"/><circle cx="10" cy="-4" r="2.5" fill="#A370BF"/><circle cx="20" cy="-2" r="2" fill="#B58CC4"/></g>`,
  // Water lily pool
  waterLilyPool: `<g transform="translate(15,85)"><ellipse rx="12" ry="4" fill="#4A90B8" opacity="0.25"/><circle cx="-3" cy="-1" r="3" fill="#5A9A78" opacity="0.7"/><circle cx="4" cy="0" r="2.5" fill="#5A9A78" opacity="0.7"/><circle cx="0" cy="-2" r="1.5" fill="#FFB6C1"/></g>`,
  // Cedar bonsai
  cedarBonsai: `<g transform="translate(85,30)"><rect x="-3" y="8" width="6" height="5" rx="1" fill="#8B6914"/><path d="M0,-10 L-6,-5 L-3,-5 L-8,0 L-3,0 L-6,5 L0,3 L6,5 L3,0 L8,0 L3,-5 L6,-5 Z" fill="#5A7D4A"/></g>`,
  // Hydrangea bush (bottom-left corner)
  hydrangeaBush: `<g transform="translate(15,80)"><circle cx="0" cy="0" r="5" fill="#B58CC4"/><circle cx="-3" cy="2" r="3.5" fill="#A370BF"/><circle cx="3" cy="2" r="3.5" fill="#C4A0D4"/><circle cx="0" cy="3" r="3" fill="#D4B8E4" opacity="0.7"/></g>`,
};

// ============================================================================
// Item configuration table
// ============================================================================

export const itemProperties: Record<string, ItemProperty> = {
  // =========================================================================
  // Gongqing Forest Park — 11 species
  // Common (Food): Camphor, Hackberry / Rare (Clothing): Ginkgo headwear, Sakura pin, Crape myrtle wreath / Epic (Decoration): Metasequoia tree, Silk tree puff
  // =========================================================================
  "gp-metasequoia": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.metasequoiaTree },
  "gp-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "gp-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "gp-camphor": { rarity: "common", satiety: 15 },
  "gp-cherry": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.sakuraPin },
  "gp-magnolia": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.magnoliaCrown },
  "gp-tulip-tree": { rarity: "rare", clothingSlot: "outfit", decorationSvg: outfitSvgs.scarf },
  "gp-crape-myrtle": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.flowerCrown },
  "gp-hackberry": { rarity: "common", satiety: 12 },
  "gp-yucca": { rarity: "common", satiety: 10 },
  "gp-silk-tree": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.silkTreePuff },

  // =========================================================================
  // Huangxing Park — 10 species
  // Common: Crape myrtle, Rose of Sharon / Rare: Sakura pin, Magnolia crown, Wisteria scarf, Purple-leaf plum / Epic: None
  // =========================================================================
  "hx-sakura": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.sakuraPin },
  "hx-magnolia": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.magnoliaCrown },
  "hx-crape-myrtle": { rarity: "common", satiety: 10 },
  "hx-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "hx-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "hx-camphor": { rarity: "common", satiety: 15 },
  "hx-wisteria": { rarity: "rare", clothingSlot: "outfit", decorationSvg: outfitSvgs.flowerSash },
  "hx-cattail": { rarity: "common", satiety: 8 },
  "hx-purple-leaf-plum": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.brooch },
  "hx-rose-of-sharon": { rarity: "common", satiety: 10 },

  // =========================================================================
  // Yangpu Park — 11 species
  // Common: Weeping willow, Southern magnolia, Camphor / Rare: Wisteria, Wintersweet, Osmanthus, Camellia, Crabapple / Epic: Wisteria arch
  // =========================================================================
  "yp-camphor": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.leafNecklace },
  "yp-wisteria": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.wisteriaArch },
  "yp-wintersweet": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.wintersweetHat },
  "yp-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "yp-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "yp-crape-myrtle": { rarity: "common", satiety: 10 },
  "yp-crabapple": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.crabappleCrown },
  "yp-camellia": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.camelliaPin },
  "yp-plum": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.plumCrown },
  "yp-southern-magnolia": { rarity: "common", satiety: 15 },
  "yp-willow": { rarity: "common", satiety: 8 },

  // =========================================================================
  // Fuxing Island Park — 10 species
  // Common: Reed, Crape myrtle, Hydrangea / Rare: Weeping willow, Oleander, Pomegranate, Jasmine / Epic: Lotus pond, Water lily pool
  // =========================================================================
  "fx-willow": { rarity: "rare", clothingSlot: "outfit", decorationSvg: outfitSvgs.cape },
  "fx-oleander": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.brooch },
  "fx-reed": { rarity: "common", satiety: 8 },
  "fx-metasequoia": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.metasequoiaTree },
  "fx-lotus": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.lotusPond },
  "fx-jasmine": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.jasmineCrown },
  "fx-crape-myrtle": { rarity: "common", satiety: 10 },
  "fx-pomegranate": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.fruitCharm },
  "fx-water-lily": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.waterLilyPool },
  "fx-hydrangea": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.hydrangeaBush },

  // =========================================================================
  // Jiangpu Park — 11 species
  // Common: Crape myrtle, Southern magnolia / Rare: Osmanthus, Ginkgo, Camellia, Cherry, Pomegranate, Silk tree / Epic: Bamboo
  // =========================================================================
  "jp-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "jp-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "jp-camellia": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.camelliaPin },
  "jp-camphor": { rarity: "common", satiety: 15 },
  "jp-crape-myrtle": { rarity: "common", satiety: 10 },
  "jp-wintersweet": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.wintersweetHat },
  "jp-wisteria": { rarity: "rare", clothingSlot: "outfit", decorationSvg: outfitSvgs.flowerSash },
  "jp-southern-magnolia": { rarity: "common", satiety: 12 },
  "jp-cherry": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.sakuraPin },
  "jp-pomegranate": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.fruitCharm },
  "jp-silk-tree": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.silkTreePuff },

  // =========================================================================
  // Songhe Park — 10 species
  // Common: Winter jasmine / Rare: Cypress, Wintersweet, Crape myrtle, Osmanthus, Nandina / Epic: Pine bonsai, Cedar, Bamboo
  // =========================================================================
  "sh-pine": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.pineBonsai },
  "sh-wintersweet": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.wintersweetHat },
  "sh-crape-myrtle": { rarity: "common", satiety: 10 },
  "sh-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "sh-nandina": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.fruitCharm },
  "sh-podocarpus": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.leafNecklace },
  "sh-cypress": { rarity: "rare", clothingSlot: "outfit", decorationSvg: outfitSvgs.vest },
  "sh-cedar": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.cedarBonsai },
  "sh-plum-blossom": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.plumCrown },
  "sh-winter-jasmine": { rarity: "common", satiety: 10 },

  // =========================================================================
  // Heping Park — 10 species (ID prefix he-)
  // Common: Weeping willow, Camphor, Southern magnolia / Rare: Ginkgo, Cherry, Magnolia, Maple, Crabapple / Epic: Lotus pond, Metasequoia tree
  // =========================================================================
  "he-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "he-cherry": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.sakuraPin },
  "he-camphor": { rarity: "common", satiety: 15 },
  "he-magnolia": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.magnoliaCrown },
  "he-metasequoia": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.metasequoiaTree },
  "he-lotus": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.lotusPond },
  "he-maple": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.mapleHat },
  "he-willow": { rarity: "common", satiety: 8 },
  "he-yulan": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.magnoliaCrown },
  "he-crabapple": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.crabappleCrown },

  // =========================================================================
  // Other parks (People's, Zhongshan, Century)
  // =========================================================================
  "pp-ginkgo": { rarity: "rare", clothingSlot: "accessory", decorationSvg: accessorySvgs.ginkgoPin },
  "pp-cherry": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.sakuraPin },
  "pp-magnolia": { rarity: "common", satiety: 12 },
  "zp-osmanthus": { rarity: "rare", clothingSlot: "headwear", decorationSvg: headwearSvgs.osmanthusCrown },
  "zp-camphor": { rarity: "common", satiety: 15 },
  "zp-wisteria": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.wisteriaArch },
  "cp-metasequoia": { rarity: "epic", decorationSlot: "scenery", decorationSvg: decorationSvgs.metasequoiaTree },
  "cp-lotus": { rarity: "epic", decorationSlot: "plant", decorationSvg: decorationSvgs.lotusPond },
  "cp-reed": { rarity: "common", satiety: 8 },
};

/** Get the item property for a plant; returns default value if not configured */
export function getItemProperty(plantId: string): ItemProperty {
  return itemProperties[plantId] ?? { rarity: "common", satiety: 10 };
}

/** Mapping from rarity to item type */
export function rarityToItemType(rarity: Rarity): "food" | "clothing" | "decoration" {
  if (rarity === "common") return "food";
  if (rarity === "rare") return "clothing";
  return "decoration";
}

/** Rarity label */
export function rarityLabel(rarity: Rarity): string {
  if (rarity === "common") return "Food";
  if (rarity === "rare") return "Clothing";
  return "Decor";
}

/** Rarity color */
export function rarityColor(rarity: Rarity): string {
  if (rarity === "common") return "#7C9885";
  if (rarity === "rare") return "#5B7C99";
  return "#9B6B99";
}

/** Get the item reward description a plant can exchange (for display on plant detail page) */
export function getItemRewardDescription(plantId: string): {
  rarity: Rarity;
  itemType: "food" | "clothing" | "decoration";
  rewardText: string;
  rewardDetail: string;
} {
  const props = getItemProperty(plantId);
  const itemType = rarityToItemType(props.rarity);

  if (itemType === "food") {
    const satiety = props.satiety ?? 10;
    return {
      rarity: props.rarity,
      itemType,
      rewardText: "食物道具",
      rewardDetail: `可兑换${satiety}点饱腹值的食物,角色饿了可以喂它吃`,
    };
  }

  if (itemType === "clothing") {
    const slotLabels: Record<string, string> = {
      headwear: "头饰",
      outfit: "服装",
      accessory: "配饰",
    };
    const slot = props.clothingSlot ? slotLabels[props.clothingSlot] : "配饰";
    return {
      rarity: props.rarity,
      itemType,
      rewardText: `${slot}道具`,
      rewardDetail: `可兑换角色${slot},穿戴在角色身上`,
    };
  }

  const decoSlotLabels: Record<string, string> = {
    furniture: "家具",
    plant: "植物",
    scenery: "场景",
  };
  const slot = props.decorationSlot ? decoSlotLabels[props.decorationSlot] : "装饰";
  return {
    rarity: props.rarity,
    itemType,
    rewardText: `${slot}装饰`,
    rewardDetail: `可兑换家居${slot},摆放在角色家中`,
  };
}
