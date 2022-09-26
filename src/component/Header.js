import GitHubButton from "react-github-button";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  let location = useLocation();

  function RenderBackButton() {
    if (location.pathname == "/")
      return (
        <>
          <div className="row-start-3 row-span-3 md:row-span-2 m-10 btn-circle"></div>
        </>
      );
    else
      return (
        <>
          <div className="row-start-3 row-span-3 md:row-span-2 m-10 btn-circle">
            <button
              onClick={() => navigate(-1)}
              class="inline-flex items-center px-4 py-2 bg-transparent hover:bg-[#fde61e] text-white text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
              Back
            </button>
          </div>
        </>
      );
  }
  return (
    <>
      <section class="grid gap-3 grid-cols-3">
        <RenderBackButton />
        <div className="hero  max-w-screen-lg mx-auto flex justify-center">
          <div>
            <img
              class="mx-auto h-48 w-50 object-fit: contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo.png"
              alt=""
            ></img>

         
          </div>
        </div>
      </section>
    </>
  );
}
