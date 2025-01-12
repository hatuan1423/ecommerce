const BlogItem = () => {
  return (
    <div className="bg-white shadow-md mr-2 rounded-md px-2 pb-3">
      <img
        src="https://product.hstatic.net/200000796751/product/433463625_747151210839345_2721418643196135114_n_b0ed348dfa8640b1a64e5169f207204c_grande.jpg"
        alt=""
        className="w-full rounded-md object-cover bg-no-repeat cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3"
      />
      <div className="w-full flex items-center flex-col">
        <div className="w-full flex items-center flex-col">
          <span className="text-lg font-semibold text-red">
            Nến Thơm và Tinh Dầu: Bí Quyết Mang Lại Không Gian Thư Giãn Tuyệt
            Vời
          </span>
          <span>
            Trong cuộc sống hiện đại đầy áp lực, việc tìm kiếm không gian yên
            bình để thư giãn, tái tạo
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
