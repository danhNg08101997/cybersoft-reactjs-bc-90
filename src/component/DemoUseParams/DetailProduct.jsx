import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  //useParams: hooks để lấy tham số động trên url -> luôn trả về string
  const params = useParams();
  //{id, categoryId}

  const [productDetail, setProductDetail] = useState({});
  const getProductDetail = async () => {
    try {
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${params.id}`
      );
      setProductDetail(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [params.id]);
//[params.id]: khi tham số id trên url thay đổi thì hàm getProductDetail sẽ được gọi lại để lấy chi tiết sản phẩm mới


  return (
    <div>
      {/*Detail product - {params.id}*/}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tên sản phẩm */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
            {productDetail.name}
          </h1>

          {/* Khối tổng: ảnh + thông tin */}
          <div className="bg-white shadow-md rounded-xl p-6 mb-10 flex flex-col md:flex-row gap-10">
            {/* LEFT: Ảnh sản phẩm + góc xoay */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={productDetail.image}
                alt="vans black"
                className="max-h-80 object-contain mb-4"
              />

              {/* Các góc xoay (set cứng) */}
              <div className="flex gap-3">
                <div className="w-16 h-16 border rounded-md flex justify-center items-center">
                  <img
                    // src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                      src={productDetail.image}
                    className="w-12 h-12 object-contain"
                    style={{ transform: "rotate(0deg)" }}
                  />
                </div>

                <div className="w-16 h-16 border rounded-md flex justify-center items-center">
                  <img
                    // src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                      src={productDetail.image}
                    className="w-12 h-12 object-contain"
                    style={{ transform: "rotateY(180deg)" }}
                  />
                </div>

                <div className="w-16 h-16 border rounded-md flex justify-center items-center">
                  <img
                    // src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                      src={productDetail.image}
                    className="w-12 h-12 object-contain"
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>

                <div className="w-16 h-16 border rounded-md flex justify-center items-center">
                  <img
                    // src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                      src={productDetail.image}
                    className="w-12 h-12 object-contain"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Thông tin sản phẩm */}
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-3">Mô tả</h2>
              <p className="text-gray-700 text-sm mb-4">
                {productDetail.description}
              </p>

              {/* Giá */}
              <p className="text-3xl font-bold text-blue-600 mb-5">
                {productDetail.price}
              </p>

              {/* Size – hardcode */}
              <div className="mb-5">
                <p className="font-semibold mb-2">Size:</p>
                <div className="flex gap-3">
                  {productDetail.size?.map((item, index) => {
                    return (
                      <span className="px-4 py-2 border rounded-md" key={index}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Nút thêm giỏ hàng */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          {/* Sản phẩm liên quan */}
          <h2 className="text-2xl font-bold mb-4">Sản phẩm liên quan</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productDetail.relatedProducts?.map((item, index) => {
              return (
                <div
                  className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                  key={index}
                >
                  <img
                    src={item.image}
                    className="w-full h-48 object-contain mb-3"
                  />
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-blue-600 font-bold mb-3">{item.price}</p>
                  <NavLink to={`/detail/${item.id}`}>
            
                    <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition">
                      Xem chi tiết
                    </button>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
