export default function BackgroundController() {
  return (
    <>
      <div
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100`}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dsvivujtj/image/upload/v1767682583/mainBg_f3847m.jpg)",
        }}
      />
      <div
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ease-in-out opacity-100 dark:opacity-0`}
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dsvivujtj/image/upload/v1767693482/ChatGPT_Image_Jan_6_2026_05_57_01_PM_ae3sl6.png)",
        }}
      />
    </>
  );
}
