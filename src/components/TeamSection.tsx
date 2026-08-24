import fabianImg from "@/assets/team-fabian.png";
import michaelImg from "@/assets/team-michael.png";
import patriciaImg from "@/assets/team-patricia.png";
import laraImg from "@/assets/team-lara.png";
import bahadirImg from "@/assets/team-bahadir.png";
import christianImg from "@/assets/team-christian.png";

const team = [
  { name: "Fabian", title: "Hyperfocus Activated", img: fabianImg },
  { name: "Michael", title: "Spreadsheet Overlord (Fun Not Budgeted)", img: michaelImg },
  { name: "Patricia", title: "Mandatory Good Vibes Officer", img: patriciaImg },
  { name: "Lara", title: "Chief You're On Camera Now", img: laraImg },
  { name: "Bahadir", title: "Too Likeable To Be This Technical", img: bahadirImg },
  { name: "Christian", title: "Does Not Require Social Interaction To Function", img: christianImg },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="sw-section-title"
          style={{
            color: "var(--sw-purple)",
            textShadow: "0 0 18px hsl(var(--neon-purple) / .75)",
            marginBottom: 20,
          }}
        >
          DAS TEAM
        </p>
        <p className="sw-lead mb-16 text-sm md:text-base">
          It's dangerous to go alone! Take these.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="sw-card sw-animate-up text-left transition-all duration-300 hover:scale-[1.03]"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="aspect-square overflow-hidden rounded mb-4 w-[60%] mx-auto">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-pixel text-xs mb-1" style={{ color: "var(--sw-text)" }}>{member.name}</h3>
              <p
                style={{
                  fontFamily: "var(--font-mono-sw)",
                  fontSize: 13,
                  color: "var(--sw-pink)",
                  lineHeight: 1.5,
                }}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
