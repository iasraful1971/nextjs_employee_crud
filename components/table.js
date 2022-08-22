/* eslint-disable @next/next/no-img-element */
import { BiEdit, BiTrash } from "react-icons/bi";
const Table = () => {
    return (
       <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birth Date</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                    </tr>
            </thead>
            <tbody className="bg-gray-200">
                    <tr className="bg-gray-50 text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            <img src="#" alt="" />
                            <span className="text-center ml-2 font-semibold">Daily Tutions</span>
                        </td>

                        <td className="px-16 py-2">
                            <span>dailytuition@gmail.com</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>$ 200</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>35 dec , 2001</span>
                        </td>
                        <td className="px-16 py-2">
                            <button className="cursor "><span className="bg-green-500 text-white px-5 py-1 rounded-full">Active</span></button>
                        </td>
                        <td className="px-16 py-2 flex justify-around  gap-2">
                            <button className="cursor "><BiEdit size={25} color={"rgb(34 , 197 , 94)"} /></button>
                            <button className="cursor "><BiTrash size={25} color={"rgb(244 , 63 , 94)"} /></button>
                        </td>
                    </tr>
            </tbody>
       </table>
    );
};

export default Table;