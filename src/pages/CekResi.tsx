import { SyntheticEvent, useEffect, useState } from "react";
import SelectOptions from "../components/SelectOptions";
import axiosClient from "../lib/axios";
import { InfoProps } from "../interfaces/courier";
import { AxiosError } from "axios";
import Table from "../components/Table";

export default function CekResi() {
  const [info, setInfo] = useState<InfoProps>({});
  const [courierOption, setCourierOption] = useState("");
  const [resi, setResi] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    axiosClient
      .get("/v1/track", {
        params: {
          courier: courierOption,
          awb: resi,
        },
      })
      .then((response: InfoProps) => setInfo(response))
      .catch((error: AxiosError) => {
        if (error.isAxiosError) {
          setError("Maaf No Resi Tidak Ada");
        }
      });
  };

  useEffect(() => {
    const clearError = setTimeout(() => {
      setError("");
    }, 2000);

    if (courierOption) {
      setIsDisabled(false);
      return;
    }

    return () => clearTimeout(clearError);
  }, [error, courierOption]);

  return (
    <>
      {info.status !== 200 ? (
        <div className="max-w-2xl mx-auto mt-24 p-4 md:p-0">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">Pilih Ekspedisi</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <SelectOptions setCourierOption={setCourierOption} />
              <h6 className="text-2xl font-medium">Masukkan Resi :</h6>
              <input
                type="text"
                className="border-b-2 focus:outline-none py-1 text-center uppercase disabled:opacity-50"
                onChange={(e) => setResi(e.target.value)}
                value={resi}
                disabled={isDisabled}
              />
              <div>
                {info.status === 400 ? <span>{"asdsad"}</span> : null}
                {!error ? (
                  <button
                    disabled={isDisabled}
                    type="submit"
                    className="bg-yellow-400 p-2 rounded font-bold w-full text-xl disabled:opacity-50"
                  >
                    Lacak
                  </button>
                ) : (
                  <h1 className="text-red-500 text-2xl">{error}</h1>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Table {...info} />
      )}
    </>
  );
}
