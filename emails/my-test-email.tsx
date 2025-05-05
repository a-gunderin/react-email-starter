import {
  Body,
  Button,
  Head,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import customTailwindConfig from "../tailwind.config";

const MyTestEmail = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>My email title</title>
    </Head>

    <Preview>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Preview>

    <Tailwind config={customTailwindConfig}>
      <Body className="m-0 p-1 font-sans">
        <p className="m-0 mt-2 p-2 text-2xl border border-[#000] border-solid rounded-[13px]">
          My test mail
        </p>

        <Button
          href="https://google.com.ua"
          target="_blank"
          className="p-2 mt-2 bg-[#c7bfbf] text-white rounded-md text-lg uppercase"
        >
          My Button
        </Button>
      </Body>
    </Tailwind>
  </Html>
);

export default MyTestEmail;
