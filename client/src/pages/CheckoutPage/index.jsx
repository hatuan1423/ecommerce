import React, { useEffect, useState } from "react";
import { Breadcrumb, Select } from "antd";
import TextInput from "~/components/TextInput";
import * as ProvinceService from "~/services/ProvinceService";
import { convertData } from "~/utils";
import Button from "~/components/Button";
import CheckoutItem from "~/components/CheckoutItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [codeProvince, setCodeProvince] = useState(null);
  const [codeDistrict, setCodeDistrict] = useState(null);

  const fetchProvince = async () => {
    const res = await ProvinceService.getAllProvince();
    setProvince(res?.data || []);
  };

  const fetchByProvince = async (code) => {
    if (code) {
      const res = await ProvinceService.getByProvince(code);
      setDistrict(res?.data || []);
    }
  };

  const fetchByDistrict = async (code) => {
    if (code) {
      const res = await ProvinceService.getByDistrict(code);
      setWard(res?.data || []);
    }
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    if (codeProvince) {
      fetchByProvince(codeProvince);
    }
  }, [codeProvince]);

  useEffect(() => {
    if (codeDistrict) {
      fetchByDistrict(codeDistrict);
    }
  }, [codeDistrict]);

  const handleChangeProvince = (value) => {
    if (value !== codeProvince) {
      setCodeProvince(value);
      setDistrict([]);
      setWard([]);
    }
  };

  const handleChangeDistrict = (value) => {
    if (value !== codeDistrict) {
      setCodeDistrict(value);
      setWard([]);
    }
  };

  return (
    <div className="w-full flex flex-col md:grid px-3 md:px-0  md:grid-cols-12 md:grid-rows-1">
      <div className="col-span-5 col-start-3 row-start-1  w-full pt-14 md:pr-16 flex flex-col">
        <div className="w-full flex-col pb-4">
          <span className="text-3xl font-semibold">Baya</span>
          <div className="w-full mt-4">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/cart">Giỏ hàng</Link>,
                },
                {
                  title: "Phương thức thanh toán",
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full pb-14">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <div className="w-full mb-6">
                <h2 className="font-bold text-lg">Thông tin giao hàng</h2>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-full mb-5 flex items-center gap-x-3">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg1MHY1MEgwVjB6IiBmaWxsPSIjRDhEOEQ4Ii8+PHBhdGggZD0iTTI1LjEwMyAyNi4yNDJjMy4yMTIgMCA1LjY0Mi0yLjkyIDUuNjQyLTYuNzg3IDAtMy4wODYtMi41OC01LjcwNS01LjY0Mi01LjcwNS0zLjA2IDAtNS42NCAyLjYyLTUuNjQgNS43MDUgMCAzLjg2NiAyLjQzIDYuNzg3IDUuNjQgNi43ODd6bTAtMTAuNTRjMS45NTIgMCAzLjY3OCAxLjc2MyAzLjY3OCAzLjc1MyAwIDIuNzU3LTEuNTc0IDQuODM1LTMuNjc3IDQuODM1LTIuMTAzIDAtMy42NzctMi4wNzgtMy42NzctNC44MzUgMC0xLjk5IDEuNzI2LTMuNzUzIDMuNjc3LTMuNzUzem0tOC40NSAyMC42MTVsLjE3Ny0xLjg3N2MuMzktMy43NzggNC42OTctNC42MSA4LjI3My00LjYxIDMuNTc3IDAgNy44ODQuODMyIDguMjc0IDQuNTk4bC4xNzYgMS44OWgyLjAxNWwtLjE3Ni0yLjA4Yy0uNDQtNC4xMTctNC4wNjgtNi4zODQtMTAuMjktNi4zODQtNi4yMiAwLTkuODQ2IDIuMjY3LTEwLjI4NyA2LjM5N2wtLjE3NiAyLjA2N2gyLjAxNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+"
                  alt=""
                />
                <div className="w-full flex text-14 gap-y-1 flex-col">
                  <span>Tuấn Duowng (hatuan1423@gmail.com)</span>
                  <span>Đăng xuất</span>
                </div>
              </div>
              <div className="w-full flex flex-col mb-7 gap-3">
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                  ]}
                />
                <TextInput placeholder="test" className="w-full" />
                <TextInput placeholder="test" className="w-full" />
                <TextInput placeholder="test" className="w-full" />
                <div className="w-full flex gap-3 items-center justify-between">
                  <Select
                    className="w-full"
                    onChange={handleChangeProvince}
                    placeholder="Tỉnh / thành"
                    options={convertData(province)}
                  />
                  <Select
                    className="w-full"
                    onChange={handleChangeDistrict}
                    options={convertData(district)}
                  />
                  <Select className="w-full" options={convertData(ward)} />
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <span>Giỏ hàng</span>
                <Button
                  className="py-4 font-light w-72 flex items-center justify-center bg-[#3DA9E2] text-white text-sm"
                  title="Tiếp tục đến phương thức thanh toán"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="col-span-3 col-start-8 pt-14 px-2 md:px-0 md:pl-11 row-start-1 bg-bg border-l h-screen w-full flex flex-col">
        <div className="w-full pb-4">
          <CheckoutItem />
        </div>
        <div className="w-full pt-5 pb-4 border-t border-border border-b flex items-center gap-2 justify-between">
          <TextInput placeholder="test" className="w-full" />
          <Button
            className="text-14 w-32 bg-[#C8C8C8] h-full text-white flex items-center justify-center"
            title="Sử dụng"
          />
        </div>
        <div className="w-full pt-5 pb-4 border-b border-border flex flex-col">
          <div className="w-full flex items-center justify-between">
            <span>Tạm tính</span>
            <span>149,000</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>Phí vận chuyển</span>
            <span>149,000</span>
          </div>
        </div>
        <div className="w-full flex pt-5  items-center justify-between">
          <span>Tổng cộng</span>
          <span>1,400,000đ</span>
        </div>
      </div>
      <div className="hidden md:block col-span-2 col-start-1 row-start-1" />
      <div className="hidden md:block col-span-2 col-start-11 bg-bg" />
    </div>
  );
};

export default Checkout;
