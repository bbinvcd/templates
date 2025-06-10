export interface PlatformItem {
    pn_name: string;
    pn_nickname: string | null;
    pn_link: string;
    pn_class: string | null;
    pn_content: string | null;
    pn_card: string | null;
    pn_card_hover: string | null;
    pn_icon: string | null;
    pn_icon_hover: string | null;
    pn_logo: string | null;
}

export interface NavItem {
    name: string;
    path: string;
    id: string;
    className: string;
    hasDropdown ?: boolean;
    hasUrl ?: boolean;
    category ?: 'balls' | 'lives' | 'games' | 'lotterys' | 'cards' | 'mores';
    platforms ?: PlatformItem[];
    hot ?: boolean;
}

export interface NavData {
    balls: PlatformItem[];
    lives: PlatformItem[];
    games: PlatformItem[];
    lotterys: PlatformItem[];
    cards: PlatformItem[];
    mores: PlatformItem[];
}