import SectionHeader from "@/Utils/SectionHeader";
import TabTitle from "@/Utils/TabTitle";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <TabTitle title="Cart" />
      <SectionHeader title='Product Cart' align='center' />
      <div className="overflow-x-auto w-full mt-4">
        <table className="w-full border-2 border-color_2/30">
          <thead className="w-full lg:text-lg bg-color_3/30">
            <th className="border border-color_2/30 w- py-2">Product</th>
            <th className="border border-color_2/30 w-">Description</th>
            <th className="border border-color_2/30 w-">Unit Price</th>
            <th className="border border-color_2/30 w-">Quantity</th>
            <th className="border border-color_2/30 w-"></th>
            <th className="border border-color_2/30 w-">Total</th>
          </thead>
          <tbody className="w-full">
            <tr className="w-full">
              <td className="border border-color_2/30 p-1 lg:h-28 lg:w-28">
                <img
                  //   src={`${imgUrl.product}${item.images}`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </td>
              <td className="font-medium lg:text-xl border border-color_2/30 p-1 w-5/12">df sdf sdf</td>
              <td className="font-semibold lg:text-xl border border-color_2/30 p-1 text-right">500/-</td>
              <td className="border border-color_2/30 p-1 w-2/12">
                <div className="bg-color_4 text-white py-1 rounded-sm flex items-center justify-center max-w-fit mx-auto">
                  <button
                    // onClick={() => decrementQuantity(item._id)}
                    className="font-bold px-4 text-2xl text-white"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    // value={desiredQuantities[item._id] || item.quantity}
                    // onChange={(e) =>
                    //   handleQuantityChange(
                    //     item._id,
                    //     parseInt(e.target.value) || 1
                    //   )
                    // }
                    // onBlur={(e) =>
                    //   setQuantity(item._id, parseInt(e.target.value) || 1)
                    // }
                    className="p-1 w-16 text-xl text-center bg-transparent"
                  />
                  <button
                    // onClick={() => incrementQuantity(item._id)}
                    className="font-bold px-4 text-2xl text-white"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="border border-color_2/30 p-1 w-14 text-center">
                <button
                  //   onClick={() => handleDelete(item._id)}
                  className=""
                >
                  <MdDelete className="text-3xl" />
                </button>
              </td>
              <td className="font-semibold lg:text-xl border border-color_2/30 p-1 w-2/12 text-right">500/-</td>
            </tr>
            <tr className="w-full font-semibold">
                <td className=""></td>
                <td className=""></td>
                <td className="border-l border-b border-color_2/30 p-1">Sub Total</td>
                <td className="border-b border-color_2/30"></td>
                <td className="border-b border-color_2/30"></td>
                <td className="border border-color_2/30 p-1 text-right">500/-</td>
            </tr>
            <tr className="w-full">
                <td className=""></td>
                <td className=""></td>
                <td className="border-l border-b border-color_2/30 p-1">Shipping Cost</td>
                <td className="border-b border-color_2/30"></td>
                <td className="border-b border-color_2/30"></td>
                <td className="border border-color_2/30 p-1 text-right">70/-</td>
            </tr>
            <tr className="w-full">
                <td className=""></td>
                <td className=""></td>
                <td className="border-l border-b border-color_2/30 p-1">Tax</td>
                <td className="border-b border-color_2/30"></td>
                <td className="border-b border-color_2/30"></td>
                <td className="border border-color_2/30 p-1 text-right">5.00/-</td>
            </tr>
            <tr className="w-full text-xl font-semibold">
                <td className=""></td>
                <td className=""></td>
                <td className="border-l border-b border-color_2/30 p-1">Grant Total</td>
                <td className="border-b border-color_2/30"></td>
                <td className="border-b border-color_2/30"></td>
                <td className="border border-color_2/30 p-1 text-right">570/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
