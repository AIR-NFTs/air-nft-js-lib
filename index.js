const ON_CHAIN_RANDOM_PARAM = "uniqueParam";
const ON_CHAIN_TOKEN_ID_PARAM = "tokenID";
const ON_CHAIN_TOTAL_TOKEN_ID_PARAM = "totalTokenCount";

const _getOnChainParam = (paramName) => {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);

   if (paramName == ON_CHAIN_RANDOM_PARAM) {
      const value = urlParams.get(paramName);

      const randonNumberArray =
         value == null
            ? [0]
            : value.match(/.{1,12}/g).map((item) => Number(item));

      return randonNumberArray == null ? [0] : randonNumberArray;
   }

   const value = Number(urlParams.get(paramName));
   return value == null || value == NaN ? 0 : value;
};

export const OnChainData = {
   RandomValue: _getOnChainParam(ON_CHAIN_RANDOM_PARAM),
   TokenID: _getOnChainParam(ON_CHAIN_TOKEN_ID_PARAM),
   TotalTokenCount: _getOnChainParam(ON_CHAIN_TOTAL_TOKEN_ID_PARAM),
   DevMode: {
      RandomValue: Number("012345678901234"),
      TokenID: Number("1"),
      TotalTokenCount: Number("100"),
   },
};
