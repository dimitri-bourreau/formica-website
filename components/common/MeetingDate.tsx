import { FC } from "react";

interface MeetingDateProps {
  date: string;
  time: string;
  place: {
    name: string;
    link: string;
  };
}

export const MeetingDate: FC<MeetingDateProps> = ({ date, time, place }) => {
  const { name: placeName, link: placeLink } = place;

  return (
    <ol className="bg-white bg-opacity-50 p-3 rounded-xl">
      <li>🗓️ {date}</li>
      <li>🕰️️ {time}</li>
      <li>
        📍
        <a className="text-cyan-700" href={placeLink}>
          {placeName}
        </a>
      </li>
    </ol>
  );
};
