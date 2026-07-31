type Matching = {
    matching_mode?: string;
    matching?: Record<string, unknown>;
};

type Product = {
    item_name?: string;
    item_id?: string;
    price: number;
};

type EcommercePayload = {
    currency: string;
    value: number;
    items: Array<Record<string, unknown> & Product>;
};

type WebEventData = Record<string, unknown> & {
    ecommerce?: EcommercePayload;
};

type PixelEventPayload = Matching & {
    web_event_data?: WebEventData;
    web_event_value?: number;
    smid?: string;
    utm?: {
        utm_campaign: string;
        utm_source: string;
        utm_medium: string;
        utm_keyword: string;
        utm_content: string;
        utm_term: string;
    };
};

type PixelI = {
    sendEvent(eventName: string, payload?: PixelEventPayload): Promise<void>;
    listenDataLayer(dataLayerName: string, matching: Matching): void;
    setMatching(matching: Required<Matching>): Promise<boolean>;
};

declare global {
    interface Window {
        acpx: PixelI;
    }
}

export type { PixelI, PixelEventPayload, EcommercePayload, WebEventData, Product, Matching };
