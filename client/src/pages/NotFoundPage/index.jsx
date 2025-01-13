import Button from "~/components/Button";
import Wrapper from "~/components/Wrapper";

const NotFoundPage = () => {
  return (
    <Wrapper className="w-full h-96 gap-y-4 flex flex-col items-center justify-center ">
      <span className="text-shadow-complex text-[170px] font-bold text-white leading-[204px] shadow-2xl]">
        404
      </span>
      <span className="text-red text-3xl font-bold">Không tìm thấy trang</span>
      <span>
        Trang bạn đang tìm kiếm có thể đã bị xóa, chuyển đi, thay đổi link hoặc
        chưa bao giờ tồn tại
      </span>
      <Button
        title="Trở về trang chủ"
        className="uppercase w-48 bg-red text-white flex items-center justify-center rounded-full py-1"
      />
    </Wrapper>
  );
};

export default NotFoundPage;
