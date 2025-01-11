import { InputNumber, Modal } from "antd";
import Button from "../Button";
const PreviewProduct = ({ open, handleClose }) => {
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <>
      <Modal footer={null} centered open={open} onCancel={handleClose}>
        <div className="w-full flex items-center justify-between">
          <div>
            <img
              src="https://product.hstatic.net/200000796751/product/2002527.1_bc0ddc2d40d44455a86bc4c9a443272e_large.jpg"
              alt=""
            />
          </div>
          <div className="w-full flex items-center flex-col">
            <span>Bát ăn snack gốm sứ ANNE màu ngẫu nhêin H6.5</span>
            <div className="w-full flex">
              <div className="w-full flex">
                <span>Mã sản phẩm:</span>
                <span>2002535</span>
              </div>
              <div className="w-full flex">
                <span>Mã sản phẩm:</span>
                <span>2002535</span>
              </div>
              <div className="w-full flex">
                <span>Mã sản phẩm:</span>
                <span>2002535</span>
              </div>
            </div>
            <div className="w-full flex items-center">
              <span>Giá</span>
              <span>29,000đ</span>
            </div>
            <div className="w-full flex">
              <span>Số lượng:</span>
              <InputNumber
                min={1}
                max={10}
                defaultValue={3}
                onChange={onChange}
              />
            </div>
            <Button
              title="Thêm vào giỏ"
              className="w-full uppercase text-sm py-2 bg-red text-white flex items-center justify-center rounded-xl"
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
