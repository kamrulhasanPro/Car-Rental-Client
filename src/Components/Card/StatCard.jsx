const StatCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="rounded-xl bg-base-100 p-5 shadow-sm border border-base-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-base-content/70">{title}</p>
          <h2 className="text-3xl font-semibold mt-1">{value}</h2>
          <p className="text-xs text-success mt-1">{subtitle}</p>
        </div>

        <div className="p-3 rounded-lg bg-primary/10 text-primary text-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
