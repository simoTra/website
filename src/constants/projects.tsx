import Image from "next/image";
import teleDemo from "public/projects/3DTele/teleDemo.png";
import stKeeb from "public/projects/st_keeb/st_keeb.png";
import projectalogs from "public/projects/projectalogs/daashboard.png";

export const projects = [
  {
    href: "https://www.instagram.com/p/CAia8cyiztElNtJCSGQwOscDkDcHex3dqL_Uw80/",
    title: "3DTele",
    description:
      "Designing and 3D Printing an Electric Guitar: A Creative Journey",
    thumbnail: teleDemo,
    images: [],
    stack: ["3D Modeling", "Solidworks", "Electronic"],
    slug: "3DTele",
    buttonText: "The guitar in action",
    content: (
      <div className="text-neutral-300 prose pt-6">
        <p className="text-neutral-300 mb-6">
          A few years ago, probably around 5 or 6, I decided it was time to
          build something. Here&apos;s my little journey.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Ideation - Dreaming Up a Custom Electric Guitar
        </h2>
        <p className="text-neutral-300 mb-4">
          Every great project starts with an idea, a spark of creativity that
          ignites the imagination.
        </p>
        <p className="text-neutral-300 mb-4">
          In this case, no grand idea, just the desire to build something a bit
          out of the ordinary, while always maintaining utility. As a fan of
          music and technology, building a guitar seemed like a natural
          progression.
        </p>
        <p className="text-neutral-300 mb-4">
          As a fan of the classic Telecaster design, I knew I wanted to start
          with this iconic shape as the foundation for my custom creation
          (let&apos;s face it, it&apos;s also the electric guitar with the
          simplest design ;)). However, I also wanted to push the boundaries and
          incorporate modern elements and personal touches into the design. This
          project was not just about replicating what already existed but about
          innovating and bringing something unique to life.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Design - Crafting the Perfect Blueprint
        </h2>
        <p className="text-neutral-300 mb-4">
          With a not so clear vision in mind, it was time to bring my ideas into
          the digital realm. Armed with Solidworks and a plethora of reference
          materials, I tried to find a design that balanced aesthetics,
          mechanical characteristics, and feasibility with the 3D printer (my
          poor Ender3 couldn&apos;t handle too many hours of printing).
        </p>
        <div className="text-neutral-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/7telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/10telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
        </div>
        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Choosing the Parts - Selecting the Finest Components
        </h2>
        <p className="text-neutral-300 mb-4">
          One of the advantages of building a custom guitar is the ability to
          handpick every component to suit your preferences and playing style.
          From the pickups to the tuning pegs, each part plays a crucial role in
          shaping the instrument&apos;s sound and performance.
        </p>
        <p className="text-neutral-300 mb-4">
          At least in theory, I encountered budget constraints (very low) for
          this project. So, I purchased an{" "}
          <a
            href="https://www.thomann.de/it/harley_benton_eguitar_kit_tstyle.html"
            className="text-neutral-300 hover:underline"
          >
            affordable kit from Thomann
          </a>{" "}
          as a starting point for the hardware.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Printing - Bringing the Design to Life
        </h2>
        <p className="text-neutral-300 mb-4">
          With the design finalized and the parts selected, it was time to turn
          digital dreams into physical reality. Armed with my trusty Ender3
          printer and a stockpile of filament, I embarked on the printing
          process with a mix of excitement and anticipation.
        </p>
        <p className="text-neutral-300 mb-4">
          Printing the various components of the guitar was a time-consuming
          endeavor, requiring patience and attention to detail.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Assembly - Putting It All Together
        </h2>
        <p className="text-neutral-300 mb-4">
          After days of printing and countless hours of post-processing, the
          moment of truth had finally arrived. With a collection of 3D-printed
          parts in hand and a sense of excitement building, I set about
          assembling my custom electric guitar.
        </p>
        <div className="text-neutral-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/6telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/9telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/8telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
                  <Image
          
            className="text-neutral-300 rounded-lg shadow-lg"
            src="/projects/3DTele/4telecaster.jpg"
            alt="Assembly Process"
            width={300}
            height={600}
          />
        </div>
        <p className="text-neutral-300 mt-4 mb-4">
          Obviously, not everything could go well on the first attempt, the neck
          of the kit was not of high quality (to tell the truth, it didn&apos;t
          have any quality at all). Amazon came to the rescue, without exceeding
          the budget too much, I found a maple neck much better than the
          previous one.
        </p>
                <Image
          
          className="text-neutral-300 rounded-lg shadow-lg my-4"
          src="/projects/3DTele/3telecaster.jpg"
          alt="Improved Maple Neck"
          width={300}
          height={600}
        />
        <p className="text-neutral-300 mb-4">
          Piece by piece, I carefully assembled the instrument, following the
          blueprint laid out during the design phase. From soldering the
          electronics to setting up the bridge and tuning the strings, every
          step was executed with precision and care.
        </p>
                <Image
          
          className="text-neutral-300 rounded-lg shadow-lg my-4"
          src="/projects/3DTele/2telecaster.jpg"
          alt="Final Assembly"
          width={300}
          height={600}
        />

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Testing - Striking the First Chords
        </h2>
        <p className="text-neutral-300 mb-4">
          With the guitar fully assembled and tuned to perfection (or maybe
          not), it was time for the ultimate test: playing the first notes. As I
          plugged in the instrument and strummed the strings, I was filled with
          a sense of pride and accomplishment.
        </p>
        <p className="text-neutral-300 mb-4">
          The sound that emanated from the amplifier was nothing short of
          breathtaking, a testament to the countless hours of design, printing,
          and assembly that had gone into creating this custom masterpiece. It
          remains a plastic guitar, not so sought-after hardware, but it
          doesn&apos;t matter!
        </p>
        <p className="text-neutral-300 mb-4">
          In the end, designing and 3D printing my own electric guitar was not
          just a technical challenge but a deeply rewarding creative endeavor.
          And as I strummed the final chord, I knew that this was only the
          beginning of many more musical adventures to come.
        </p>
                <Image
          
          className="text-neutral-300 rounded-lg shadow-lg my-4"
          src="/projects/3DTele/1telecaster.jpg"
          alt="Live Test"
          width={300}
          height={600}
        />

        <p className="text-neutral-300 mb-4">
          If you&apos;ve made it this far reading, perhaps you&apos;d like to
          know how this guitar sounds;{" "}
          <a
            href="https://www.instagram.com/p/CAia8cyiztElNtJCSGQwOscDkDcHex3dqL_Uw80/"
            className="text-neutral-300 hover:underline"
          >
            {" "}
            on my Instagram profile
          </a>
          , you can find three videos where I test it. Let me know what you
          think in the comments below.
        </p>
        <p className="text-neutral-300 mb-4">
          If you want, all files are available for free{" "}
          <a
            href="https://www.thingiverse.com/thing:3586995"
            className="text-neutral-300 hover:underline"
          >
            on thingiverse
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/simoTra/st_keeb",
    title: "st_keeb",
    description: "The alice-like keyboard you are looking at.",
    thumbnail: stKeeb,
    images: [],
    stack: ["3D Modeling", "Fusion360", "Electronic", "Plasma Cutting"],
    slug: "st_keeb",
    buttonText: "More on GitHub",
    content: (
      <div className="text-neutral-300 prose mx-auto p-6">
        <h1 className="text-neutral-300 text-3xl font-bold mb-4">
          Handwired Keyboard with Plasma-Cut Inox Frame and 3D Printed Split
          Plate
        </h1>

        <p className="text-neutral-300 mb-6">
          This handwired keyboard has a unique design with a plasma-cut inox
          frame and a 3D-printed split plate, reflecting the perfect combination
          of aesthetics and functionality. The keyboard boasts a sleek, modern
          design with a durable and aesthetically pleasing base. The sanded inox
          frame has a glossy finish, providing a distinct and premium look.
        </p>
        <p className="text-neutral-300 mb-6">
          The 3D-printed split plate ensures precise switch positioning and
          eliminates any rattling during typing. Made from high-quality PETG,
          the plate is designed for durability. Brass inserts in the 3D-printed
          parts securely hold the screws in place.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Microcontroller
        </h2>
        <p className="text-neutral-300 mb-4">
          The keyboard is powered by an Arduino Pro Micro microcontroller,
          connected to each switch using a matrix scheme.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Switches
        </h2>
        <p className="text-neutral-300 mb-4">
          This keyboard uses Gateron Yellow Pro switches, known for their smooth
          linear feel, making them perfect for typing. Their high actuation
          force reduces accidental keypresses, ensuring precision.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Bill of Materials (BOM)
        </h2>
        <ul className="text-neutral-300 list-disc ml-6 mb-6">
          <li>1x Plasma-cut inox frame (also 3D printable)</li>
          <li>1x 3D-printed split plate</li>
          <li>
            1x Arduino Pro Micro (or ATMega 32u4 compatible microcontroller)
          </li>
          <li>67x Gateron Yellow Pro switch</li>
          <li>67x 1N4148 diode</li>
          <li>8x M3 screw</li>
          <li>8x M3x4mm brass insert</li>
        </ul>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Layout and Matrix Scheme
        </h2>
        <p className="text-neutral-300 mb-4">
          The matrix configuration is peculiar yet functional, designed to
          facilitate assembly operations.
        </p>
                <Image
          
          className="text-neutral-300 rounded-lg shadow-lg my-4"
          src="https://github.com/simoTra/st_keeb/raw/main/images/layout.png"
          alt="Keyboard Layout"
          width={300}
          height={600}
        />
        <p className="text-neutral-300 mb-4">
          For detailed instructions on using the LED pin as input for the
          matrix, refer to{" "}
          <a
            href="https://golem.hu/guide/pro-micro-upgrade/"
            className="text-neutral-300 hover:underline"
            target="_blank"
          >
            this guide
          </a>
          .
        </p>
                <Image
          
          className="text-neutral-300 rounded-lg shadow-lg my-4"
          src="https://github.com/simoTra/st_keeb/raw/main/images/matrixScheme.png"
          alt="Matrix Scheme"
          width={300}
          height={600}
        />

        <p className="text-neutral-300 mb-4">
          More photos and details can be found in the{" "}
          <a
            href="https://github.com/simoTra/st_keeb"
            className="text-neutral-300 hover:underline"
            target="_blank"
          >
            official GitHub repo
          </a>
          .
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">Photos</h2>
        <table className="text-neutral-300 table-auto w-full text-center mb-6">
          <thead>
            <tr>
              <th>Orbital Sanding</th>
              <th>Printed Part</th>
              <th>Final Without Base</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/orbitalSanding.jpg"
                  alt="orbital sanding"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/printedPart.jpg"
                  alt="printed part"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/finalWithoutBase.jpg"
                  alt="final without base"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="text-neutral-300 table-auto w-full text-center mb-6">
          <thead>
            <tr>
              <th>Back</th>
              <th>Microcontroller</th>
              <th>Matrix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/back.jpeg"
                  alt="back"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/microcontroller.jpeg"
                  alt="microcontroller"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/matrix.jpeg"
                  alt="matrix"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="text-neutral-300 table-auto w-full text-center mb-6">
          <thead>
            <tr>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                        <Image
          
                  src="https://github.com/simoTra/st_keeb/raw/main/images/final.jpeg"
                  alt="final"
                  className="text-neutral-300 rounded-lg shadow-lg"
                  width={300}
                  height={600}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Future Improvements
        </h2>
        <p className="text-neutral-300 mb-4">
          Hand wiring can be messy, especially with 67 keys. The next version
          will include a PCB, which might also replace the 3D-printed plate to
          reduce assembly time. Additionally, an encoder could be added to the
          top right, relocating the <em>tilde</em> and <em>delete</em> keys one
          row below.
        </p>

        <h2 className="text-neutral-300 text-2xl font-semibold mb-4">
          Conclusion
        </h2>
        <p className="text-neutral-300 mb-4">
          If you&apos;re looking for a high-quality, handwired keyboard that is
          both aesthetically pleasing and functional, this design is an
          excellent choice. With its unique design, premium materials, and
          exceptional switches, it offers a fantastic typing experience. The
          3D-printed parts add customization options and ease of assembly,
          making it a rewarding DIY project.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/simoTra/projectalogs-dashboard",
    title: "ProjectaLogs",
    description:
      "Track 3D printing jobs, projects, clients, and costs effortlessly!",
    thumbnail: projectalogs,
    images: [],
    stack: ["Programming", "NestJs", "React", "Klipepr", "3D Printing"],
    slug: "projectaLogs",
    buttonText: "More on GitHub",
    content: (
      <div className="text-neutral-300 prose mx-auto p-6">
        <h1>Understanding the Architecture of Projectalogs</h1>
        <p>
          <strong>Projectalogs</strong> is a 3D printing job tracking tool
          designed to group prints by project, associate them with clients, and
          provide analytics on costs and performance. Below is an overview of
          its architecture.
        </p>

        <h2>Frontend</h2>
        <p>
          The frontend is built with <strong>React</strong>, leveraging the{" "}
          <strong>Refine</strong> framework. This interface allows users to
          perform CRUD (Create, Read, Update, Delete) operations for managing
          clients, jobs, and projects. Additionally, it provides a dashboard for
          viewing real-time statistics and analytics of the connected 3D
          printer.
        </p>

        <h2>Backend</h2>
        <p>
          The backend is implemented in <strong>TypeScript</strong> using the{" "}
          <strong>NestJS</strong> framework. It serves as the central hub,
          managing data and business logic. The backend also integrates with{" "}
          <strong>Moonraker Klipper</strong> APIs to import existing print jobs
          and to enable the creation of new jobs directly within Klipper
          interfaces like Fluidd and Mainsail.
        </p>

        <h2>Current Status</h2>
        <p>
          As of now, Projectalogs is in its early stages. The base architecture
          and CRUD functionalities are implemented, providing a solid foundation
          for future development. More advanced features, such as enhanced
          analytics and deeper integration with Klipper interfaces, are planned.
        </p>

                <Image
          
          src="/projects/projectalogs/projectalogsArchitecture.png"
          alt="Architecture Diagram"
          className="text-neutral-300 rounded-lg shadow-lg"
          width={600}
          height={600}
        />
      </div>
    ),
  },
];
