
export default function BlogPost() {
  return (
    <div className="">
      <div className="columns-1 mx-auto max-w-7xl lg:px-8">
        <div className="lg:col-span-1">
          <div className="h-80 lg:-ml-8 lg:h-auto lg:w-full xl:ml-0">
            <img
              className=" max-h-96 w-1/2 mx-auto bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="max-w-4xl mx-auto py-8">
            <h1
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
              id="title"
            >
              A better workflow
            </h1>
            <p
              className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-300"
              id="post-author"
            >
              Some Name
            </p>
            <div
              className="mt-10 text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-none"
              id="post-content"
            >
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
