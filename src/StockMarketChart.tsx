import React from "react";

export interface StockMarketChartProps {
    tickerSymbol: string;
}

export function StockMarketChart ({tickerSymbol}: StockMarketChartProps) {
    const iframe = `<iframe id="tradingview_187d0" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_187d0&amp;symbol=${tickerSymbol}&amp;interval=1&amp;range=12M&amp;hidetoptoolbar=1&amp;saveimage=0&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=light&amp;style=2&amp;timezone=America%2FNew_York&amp;withdateranges=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.dataroma.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=${tickerSymbol}" style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe>`;

    return <div dangerouslySetInnerHTML={{__html: iframe}} />
}