import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [arrayProducts, setArrayProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      //sử dụng axios
      const res = await axios.get(
        "https://apistore.cybersoft.edu.vn/api/Product"
      );
      setArrayProducts(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  //hooks useEffect gọi api
  useEffect(() => {
    getAllProducts();
  }, []);
  //[]: dêpndency array rỗng giúp chỉ gọi api 1 lần khi component được render lần đầu tiên
  //[param]: khi giá trị của param thay đổi thì hook useEffect sẽ được gọi lại thường ứng dụng cho các trang detail product hay search product,...
  //return: xóa các side effect chạy ngầm (ví dụ: clear interval, clear timeout, api socket....)
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Sản phẩm nổi bật</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* CARD 1 */}
          {arrayProducts?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt="Giày Sneaker Classic"
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                  <p className="text-blue-600 font-bold mb-3">{item.price}đ</p>
                  <NavLink to={`/detail/${item.id}`}>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                      Xem chi tiết
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
