import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  title: string;
  data: string;
  data2?: string;
  isLoading: boolean;
}

export const InfoItem = ({ title, data, data2, isLoading }: Props) => {
  return (
    <div className="flex flex-grow flex-col px-10 md:text-left md:max-w-[25%]">
      <h2 className="font-semibold text-dark-gray text-wrap text-[11px] tracking-widest md:pb-3 md:text-[13px]">
        {title}
      </h2>
      <p className="w-full font-[500] text-[16px] md:text-[22px] lg:text-[28px]">
        {!isLoading ? data : <Skeleton />}
      </p>
      {data2 && (
        <p className="w-full font-[500] text-[16px] md:text-[22px]  lg:text-[28px]">
          {!isLoading ? data2 : <Skeleton />}
        </p>
      )}
    </div>
  );
};
