import { InputNumber, Modal } from "antd";
import Button from "../Button";
const PreviewProduct = ({ open, handleClose }) => {
  const onChange = (value) => {};

  return (
    <>
      <Modal
        width="auto"
        footer={null}
        centered
        open={open}
        onCancel={handleClose}
      >
        <div className="w-full flex">
          <div className="w-full h-full">
            <img
              src="https://product.hstatic.net/200000796751/product/2002527.1_bc0ddc2d40d44455a86bc4c9a443272e_large.jpg"
              alt=""
              className="w-full h-full object-cover bg-no-repeat"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <span className="text-xl font-semibold text-red">
                Bát ăn snack gốm sứ ANNE màu ngẫu nhiên H6.5
              </span>
              <div className="w-full flex items-center">
                <div className="w-full gap-x-1 flex items-center">
                  <span className="text-base font-light">Mã sản phẩm:</span>
                  <span className="text-sm font-semibold text-red">
                    {" "}
                    2002535
                  </span>
                </div>
                <div className="w-full gap-x-1 flex">
                  <span className="text-base font-light">Mã sản phẩm:</span>
                  <span className="text-sm font-semibold text-red">
                    2002535
                  </span>
                </div>
                <div className="w-full gap-x-1 flex">
                  <span className="text-base font-light">Mã sản phẩm:</span>
                  <span className="text-sm font-semibold text-red">
                    2002535
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-x-20 items-center">
              <span className="text-base font-semibold">Giá</span>
              <span className="text-xl font-semibold text-red">29,000đ</span>
            </div>
            <div className="w-full items-center gap-x-8 flex">
              <span className="text-base font-semibold">Số lượng:</span>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChange}
              />
            </div>
            <Button
              title="Thêm vào giỏ"
              className="w-full uppercase text-sm py-2 bg-red text-white flex justify-center rounded-xl"
            />
            <div className="w-full flex">
              <span>Chia sẻ:</span>
              <div></div>
            </div>
            <span className="underline">Xem chi tiết sản phẩm</span>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PreviewProduct;
