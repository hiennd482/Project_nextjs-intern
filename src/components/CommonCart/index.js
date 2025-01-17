"use client";

import { useRouter } from "next/navigation";
import ComponentLevelLoader from "../Loader/componentlevel";

export default function CommonCart({
  cartItems = [],
  handleDeleteCartItem,
  componentLevelLoader,
}) {
  const router = useRouter();

  return (
    <section className="h-screen bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {cartItems && cartItems.length ? (
                  <ul className="-my-8">
                    {cartItems.map((cartItem) => (
                      <li
                        className="flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        key={cartItem.id}
                      >
                        <div className="shrink-0">
                          <img
                            src={
                              cartItem &&
                              cartItem.productID &&
                              cartItem.productID.imageUrl
                            }
                            alt="Product image"
                            className="h-24 w-25 max-w-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-4">
                              <p className="text-base font-semibold text-gray-900">
                                {cartItem &&
                                  cartItem.productID &&
                                  cartItem.productID.name}
                              </p>
                            </div>
                            <div className="mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-auto text-base font-semibold text-gray-950 sm:order-1 sm:ml-8 sm:text-right">
                                {cartItem &&
                                  cartItem.productID &&
                                  Intl.NumberFormat("vi-VN").format(
                                    cartItem.productID.price
                                  )}{" "}
                                vnđ
                              </p>
                              <button
                                type="button"
                                className="font-medium text-yellow-700 sm:order-2"
                                onClick={() =>
                                  handleDeleteCartItem(cartItem._id)
                                }
                              >
                                {componentLevelLoader &&
                                componentLevelLoader.loading &&
                                componentLevelLoader.id === cartItem._id ? (
                                  <ComponentLevelLoader
                                    text={"Removing"}
                                    color={"#0000000"}
                                    loading={
                                      componentLevelLoader &&
                                      componentLevelLoader.loading
                                    }
                                  />
                                ) : (
                                  "Xóa"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1 className="font-bold text-lg">Giỏ hàng trống</h1>
                )}
              </div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Tổng phụ thu</p>
                  <p className="text-lg text-black font-semibold">
                    {Intl.NumberFormat("vi-VN").format(
                      cartItems && cartItems.length
                        ? cartItems.reduce(
                            (total, item) => item.productID.price + total,
                            0
                          )
                        : "0"
                    )}{" "}
                    vnđ
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Phí ship</p>
                  <p className="text-lg text-black font-semibold">0đ</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Tổng tiền</p>
                  <p className="text-lg text-black font-semibold">
                    {Intl.NumberFormat("vi-VN").format(
                      cartItems && cartItems.length
                        ? cartItems.reduce(
                            (total, item) => item.productID.price + total,
                            0
                          )
                        : "0"
                    )}{" "}
                    vnđ
                  </p>
                </div>
                <div className="mt-5 text-center">
                  <button
                    onClick={() => router.push("/checkout")}
                    disabled={cartItems && cartItems.length === 0}
                    className="disabled:opacity-50 group inline-flex rounded-md w-full items-center justify-center bg-blue-custom px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
