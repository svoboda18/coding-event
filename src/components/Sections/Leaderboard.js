"use client";
import { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [hasChallanges, setHasChallanges] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallengeLeaderboard = async (challengeCode) => {
      try {
        const response = await fetch(`http://localhost:3000/leaderboard/${challengeCode}`);
        const data = await response.json();

        return data;
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    const fetchChallenges = async () => {
      try {
        const response = await fetch('/api/fetchChallenges');
        const data = await response.json();

        const str = JSON.stringify(data.content).replace(/\\r|"/g, '')

        return !str.length ? [] : str.split('\\n');
      } catch (error) {
        console.error('challanges file crying')
      }
    }

    const fetchLeaderboard = async () => {
      try {
        const ch = await fetchChallenges();
        var leaderboard = [];

        if (!ch.length) {
          console.log('event ded')
          return;
        }
        console.log(ch);

        setChallenges(ch);
        setHasChallanges(true)

        for (const i in ch) {
          const challengeLeaderboard = await fetchChallengeLeaderboard(ch.at(i));
          const obj = JSON.parse(challengeLeaderboard);

          for (const [u, sr] of Object.entries(obj)) {
            const r = parseInt(sr);
            const e = leaderboard.find((v) => v.name == u);

            if (!e) {
              var hist = {}
              hist[i] = r;
              leaderboard.push({ name: u, rank: r, challenges: 1, hist })
            } else {
              e.hist[i] = r;
              e.rank = (e.rank * e.challenges + r) / e.challenges++;
            }
          }
        }

        setLoading(false)

        leaderboard = leaderboard.sort((a, b) => a.challenges < b.challenges ? 1 : a.rank > b.rank ? 1 : a.challenges == b.challenges && a.rank == b.rank ? 0 : -1)

        setLeaderboard(leaderboard);
        console.log(leaderboard);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchLeaderboard();

    const intervalId = setInterval(fetchLeaderboard, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-[10vw] gap-[8vh] font-display text-white mt-10 flex flex-col items-center justify-center">
      <h1 className="uppercase font-['Gilroy'] font-extrabold text-xl sm:text-2xl xl:text-6xl lg:text-4xl md:text-2xl text-white">
        Leaderboard</h1>
      {
        !hasChallanges ?
          (
            <div class="p-4 mb-4 rounded-lg text-black bg-[#DEF400] bg-opacity-85">
              <div class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <h3 class="text-lg font-medium">The event has not yet started!</h3>
              </div>
              <div class="mt-2 mb-4 text-sm">
                You can wait until the start of the event, as soon as the first challange starts, the leaderboard will be updated, feel free to refresh this page to check.
              </div>
            </div>
          ) :
          (
            <table className="min-w-full text-white border border-[#DEF400] border-opacity-90	 rounded-lg">
              <thead>
                <tr >
                  <th className="py-2 px-4 border-[#DEF400] border-b">Participant</th>
                  <th className="py-2 px-4 border-[#DEF400] border-b">Rank</th>
                  <th colSpan={challenges.length} className="py-2 px-4 border-[#DEF400] border-b">Challenges</th>
                </tr>
                <tr>
                  <th colSpan={2} className="py-2 px-4 border-[#DEF400] border-b"></th>
                  {challenges.map((entry, i) => (
                    <th className="py-2 px-4 border-[#DEF400] border-b">Challenge {i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {
                  loading ? (
                    <tr className='text-center border-opacity-90'>
                      <td colSpan={3} className='text-center' >
                        <svg aria-hidden="true" class="w-12 h-12 m-4 text-white animate-spin fill-[#DEF400]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                      </td>
                    </tr>
                  ) : leaderboard.map((entry, index) => (
                    <tr className='text-center border-opacity-90' key={index}>
                      <td className="py-2 px-4 border-[#DEF400] border-b">{entry.name}</td>
                      <td className="py-2 px-4 border-[#DEF400] border-b">{index + 1}</td>
                      {
                        Object.entries(entry.hist).map((entry, idx) => {
                          const [i, r] = entry;
                          return (<td className="py-2 px-4 border-[#DEF400] border-b">{idx == parseInt(i) ? r : '/'}</td>
                          )
                        })
                      }
                    </tr>
                  ))}
              </tbody>
            </table>

          )
      }
      {
        hasChallanges && !loading ?
          (
            <a type='button' className="lg:block bg-[#DEF400] px-[2vw] py-[2vh]" href={challenges.at(challenges.length - 1)}>
              Enter Challenge
            </a>
          ) : (
            <div></div>
          )
      }
    </div>
  );
};

export default Leaderboard;
