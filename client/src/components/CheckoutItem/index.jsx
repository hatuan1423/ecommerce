const CheckoutItem = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-full gap-2 flex items-center">
        <img
          src="https://product.hstatic.net/200000796751/product/2002531.1_1f7d224fe4ce45e088a0bc835159b856_small.jpg"
          alt=""
          className="w-16 h-16 border-1 border-border rounded-lg"
        />
        <span className="text-14 font-semibold">
          Bát canh gốm sứ ANNE màu ngẫu nhiên H3.3xD14.2
        </span>
      </div>

      <span>149.000đ</span>
    </div>
  );
};

export default CheckoutItem;
