import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ActionCard from "@/app/components/ActionCard";
import Calendar from "@/app/components/svgs/Calendar";
import Drink from "@/app/components/svgs/Drink";
import Done from "@/app/components/svgs/Done";
import ProcessCard from "@/app/components/ProcessCard";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="mb-10 text-center">
        <h1 className="mb-5 mt-5 text-5xl font-bold md:text-6xl">
          {t("title")}
        </h1>

        <h2 className="mb-10 text-2xl md:text-3xl">{t("glamUp")}</h2>

        <p className="mb-10">{t("proMakeUpArtisBook")}</p>

        <div className="space-x-3">
          <Link
            href={"/booking"}
            className="rounded border border-white bg-white px-4 py-2 font-semibold text-pink-500 shadow transition duration-300 ease-in-out hover:text-pink-700"
          >
            {t("bookNow")}
          </Link>
          <Link
            href={"/references"}
            className="rounded border border-white px-4 py-2 font-semibold shadow transition duration-300 ease-in-out hover:text-pink-100"
          >
            {t("howWillILook")}
          </Link>
        </div>
      </section>

      <section className="flex flex-col justify-center space-x-0 space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <ActionCard svg={<Calendar />} title={t("bookAppointment")} />

        <ActionCard svg={<Drink />} title={t("enjoyLakeside")} />

        <ActionCard svg={<Done />} title={t("readyToConquer")} />
      </section>

      <section className="flex w-full flex-col items-center space-y-6 md:space-x-6 md:space-y-0">
        <h2 className="mb-8 w-full text-center text-3xl font-bold">
          {t("process")}
        </h2>

        <div className="flex w-full flex-col items-center">
          <ProcessCard
            number={1}
            title={t("book")}
            description={t("selectTime")}
          />

          <ProcessCard
            number={2}
            title={t("visitApartment")}
            description={t("comeToApartment")}
          />

          <ProcessCard
            number={3}
            title={t("makeUpSession")}
            description={t("relax")}
          />

          <ProcessCard
            number={4}
            title={t("drinkAndJam")}
            description={t("festivalMood")}
          />

          <ProcessCard
            number={5}
            title={t("enjoyFestival")}
            description={t("readyForFestival")}
          />
        </div>
      </section>
    </>
  );
}
