import { InfoProps } from "../interfaces/courier";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

function Table({ data }: InfoProps) {
  moment.locale("fr");
  return (
    <>
      <div className="mb-4 bg-gray-50 text-gray-700 text-left p-4 rounded">
        <h6 className="text-md font-bold">Resi : {data?.summary.awb}</h6>
        <h6 className="text-md font-bold">Courier : {data?.summary.courier}</h6>
        <h6 className="text-md font-bold">Tanggal : {data?.summary.date}</h6>
        <h6 className="text-md font-bold">Status : {data?.summary.status}</h6>
      </div>

      <div className="relative overflow-x-auto overflow-y-scroll h-72">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tanggal / Waktu
              </th>
              <th scope="col" className="px-6 py-3">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.history.map((detail, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {detail.date}{" "}
                  <span>{`( ${moment(detail.date).fromNow()} )`}</span>
                </th>
                <td className="px-6 py-4">{detail.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
