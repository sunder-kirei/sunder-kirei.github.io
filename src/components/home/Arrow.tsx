import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Arrow({ className, ...props }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      className={twMerge(className)}
    >
      <path
        className="fill-primary"
        d="M39.508 44.293c-.089.181-.29.253-.543.271.056-.327-.249-.295-.135-.68.463-.1.171.553.678.409zM29.185 47.96c.388.026.741.017.679-.407-.317.045-.586.138-.679.407zm-2.309 2.31c.253-.007.287.104.135.271.276.16.555-.071.272.409.433-.207 1.398-.588 1.222-.952-.55.603-1.407-.226-1.629.272zm-1.223.951c.485-.015.933-.063 1.087-.408-.152-.029-.211-.151-.272-.272.16-.021.386.024.408-.135h-.68c.465.682-.494.293-.543.815zM6.908 63.038c.031-.484-.195-.711-.679-.68.056.398.464.441.679.68zm9.644-3.261c.017-.301.576-.058.815-.136-.006-.188.063-.298.135-.407-.298-.155-.451-.455-.815-.544.352.407-.345.908-.135 1.087zm17.387-18.744c-.3.087.619-.71-.136-.679.413.476-.444.573-.543.136-.253.018-.454.09-.542.271.584-.17 1.043.484 1.221.272zm8.15 1.629c-.524.156-.829.529-1.087.952-.159.021-.385-.024-.408.136.672-.073 1.238.069 1.358-.545.317.101.766.096 1.087-.135-.507-.319-1.33.277-.95-.408zm-1.087.408c0 .075.11.154.136 0-.106-.031-.158-.114-.136-.272-.34-.022-.329.305-.543.407.277.273.362.037.543-.135zm-6.384 2.718c.543-.062-.122.574-.543.407.119-.24.455-.421 0-.543.007.529-.248.895-.407.951.418-.101.166.469.679.271-.388-.518.491-.528.679-.407-.134-.51.668-.296.272-.678.161-.022.386.022.408-.136-.326.081-.987-.173-1.088.135zm-3.804 1.901c-.504-.086-1.347.272-.679.543-.079-.598 1.055-.147.542.135.084.008.162.021.136.136.234.007.349-.104.408-.271-.357.041-.445-.188-.407-.543zM6.093 63.174c-.333.164-.484-.208-1.222-.136-.04.16-.548.513-.136.678.068-.835 1.15-.052 1.494-.407.031.24-.136.682.271.544.028-.39.018-.741-.407-.679zm-1.222 3.803c.248-.205.416-.488.407-.95-.251-.021-.523.742-.407.95zm.407-3.261c.837-.068.124.629-.136.68.233-.007.348.104.407.272-.197.074-.702-.158-.679.135.299.122.583-.018 1.087.137-.299-.669.272-.034.271-.814-.178-.268-.703-1.04-.95-.41zm58.107-11.95l.005.027c.037.006.025-.007-.005-.027zm31.736 4.254c.037.406.223.849.088 1.211-.295.132-.051-.391-.16-.535-.304.567-.268.343-.605.042-.204.113-.251.267-.212.442.716.279.278.353.857.913-.425-.128-.286.834-.7.417-.127.098.028.27.091.418.12.309.493-.381.558.142-.168.146-.267.01-.418.092.045.078.093.155.138.234.687-.214.117 1.774.408 2.284-.111.438-.853.253-.563.65-.18.058-.27-.235-.393-.397-.225.252.187.927-.493.766.599.585.461 1.109.599 1.54-.635.169-.16.619-.797.789-.04-.44.382-.276.307-.814-.43.08-.436-.675-.974-.842.018.453.274.373.438 1.004-.687.31-.146.318-.375.694-.655-.286.334-1.009-.158-1.328-.55.536-.173 1.202-.869 1.463-.027-.7-1.107-.204-1.464-.867-1.986.779-3.412-1.788-5.653-1.541-1.224-1.413-4.634-1.374-5.459-3.076-.346-.073-.68-.189-.952-.541-.059.15-.051.316-.026.489-1.337-.272-1.371-.291-2.931-.946.347-.195.52.293.908-.064-.395-.022-1.145-.679-1.351-.146-.267.014-.474-.212-.65-.563.217-.193.358-.104.538-.159-1.173-.038-2.279-1.205-1.993-2.292-.704-.459-.151.627-.609.836-.069-.119-.139-.233-.207-.352.113.655-.332.457-1.006.438-.051-.203.177-.041.352-.207-.188-.035-.293-.408-.56-.144.166-.298.244-.183.447-.579-.12-.31-.365-.129-.464-.515-.188.149-.146.358.042.604-.213.195-.355.104-.536.162.022-.227.174-.42.26-.629-.381-.117-.642.131-1.211.088-.239-.748-.806-.213-1.044-.96.117-.42.251-.289.445-.58a2.598 2.598 0 01-1.321-1.427c-.546.092.286.535-.259.628.233.245.599-.02.765.491l-.466.278c-.073-.185.324-.249.212-.44-.324.061-.463.197-.814-.309-.348.329-.596.266-.744-.189-.118.469-.538.14-.888.368.073-.329-.445-.532-.671-.863.196-.125.354-.095.489.025.256-.659-.551-.386-.252-.958-.15-.058-.318-.049-.489-.023a1.813 1.813 0 00-.693-1.17c-.06.348.306.806.39 1.191-.252.086-.327-.53-.674-.074.04.207-.03.209.038.578-.136-.098-.83-.459-.923-1.002-.36.107-.081.375-.141.559-.087.08-.138.02-.187-.047-.037-.113-.111-.083-.187-.049.277-.621.341-1.299.964-1.834-.088-.171-.177-.343-.325-.281-.142-.354.364-.225.372.094-.134-.859.583-.32.121-.86.458.215.873-.415.54-.952.837-.043 1.533.465 2.209 1.057.618-.409 1.18.303 1.999.709-.375-.205-.473-.064-.53.158l-.006.002.005.006c-.054.21-.074.491-.264.622a.842.842 0 01.2.127c.081-.187.167-.368.235-.567a1.433 1.433 0 01-.172-.183l.001-.008c.415-.183.475-.021.515.137h.22a.398.398 0 00-.119.197c.066.034.186.003.427-.163.263.73.402.729.854 1.705.171-.254-.014-.598-.252-.957.373-.159.899.247.836.609.259-.1.352-.241.212-.442.334.371.222 1.468 1.109 1.869.092-.273-.219-.649-.065-.908-.367.188-.547.059-.464-.514.189-.159.305-.032.187.046.1.126.271-.028.419-.091.46.416-.027.588.067.908.44-.08.494-.182 1.072-.32.369.439 1.374 1.549 2.325.99.34.346.259.445.718.678-.074-.35.131-.627.237-.93.252.045.531.289.464.514-.16-.02-.302-.107-.441-.211-.212.242.343.682.438 1.004.073-.146-.039-.342.211-.442.443.376.488.835.949 1.331-.266-.681-.078-.904-.391-1.189.392-.027.511.025.58.447-.01-1.092 1.835.939 2.026.219.316-.152-.041.295.277.467-.18.05-.306-.096-.49-.025-.029.262.457.164.044.605.309.259.211-.355.536-.16.396.777.644.529 1.136 1.379.069-.229.156-.154.351-.207-.361-.413-1.109-.896-1.135-1.381.148-.062.225.154.325.283.444-.277-.045.46.649.561.002-.276-.13-1.021-.486-.816.35-.638.733.238.837.609.109-.204.266-.396.073-.676.183-.072.247.324.44.212-.132.474-.003.795-.354.999.533.498 1.202.467 1.814.661-.028.355-.336.085-.516.463.309.26.211-.354.536-.16l.278.468c-.174.034-.328-.007-.442-.212-.109.104.059.279-.096.374.638.09.772.19 1.352.145.363.347.754 1.015 1.069.47.164.305-.272.535-.514.465.045.077.091.156.138.233.272-.326.785.122 1.328-.157.031.853.855.735 1.253 1.312.312-.354-1.154-.541-.253-.958.038.409.396.616.789.757.011 0 .02-.005.033-.005.065-1.061-1.301-.691-1.221-1.767-.14.088-.141.312-.407.271.463-.308-.621-.525-.138-.814-.054-.263-.621-.013-.407-.542-.66.208-.512-.395-.949-.408.082-.121.162-.243 0-.272.042-.185.34-.112.542-.135-.037-.125-.602-.361-.542-.136-.282-.076.183-.525.542-.408-.152-.62-.448-.174-.68-.95-.629.294-.683.205-1.358 0-.163-.179-.052-.215 0-.407-.283.297-.388-.067-.814 0 .092-.817-.949-.5-.815-1.359-.183.09-.253.291-.271.543.047-.744-.465-.425-.543-1.221-1.43-.345-1.325-1.386-2.581-1.903.014-1.089-2.701-1.563-1.901-2.717-.033-.147-.27-.091-.272-.271-.167.076.102.526-.542.407-.013-.37.225-.274 0-.543-.447.23-1.501-.591-1.225-1.085-.396-.317-1.031-.584-1.222-.136-.354-.415-.757-.784-1.493-.814.182-.386.576-.146 1.086-.409-.457-.404-1.005.257-1.493.272.598-.42-.377-.614-.272-.272-.47.017-.198-.706-.542-.814-.133.004-.107.166-.138.271-2.102-1.189-4.25-1.793-6.654-2.445-.203.059.053.174 0 .407-.457-.335-1.107.319-1.223-.407.196.075.702-.159.679.136.039-.204.182-.243.408-.543.006-.75-.985.139-.815.136-.645.01.343-.005-.136-.408-.243-.203-1.24.453-1.223-.271-.203.126.146.612-.271.136-.428.19.187.67-.137.814-.206.225.005-.321-.136-.679h-.679c-.127.372-.678.318-.951.543-.238-.032-.31-.233-.271-.543.213.059.115.428.542.272.239-.124.249-.476.408-.679-.358-.041-.446.188-.408.543-.525.12-.222-.592-.814-.407.036.279-.31.115-.407.543-.11-.025-.136-.136-.271-.136.024-.115-.054-.127-.136-.136.549-.639-1.969-.519-1.902-.135-.136.323-.398-.052-.364-.275a.411.411 0 00.094-.132c-.061.021-.085.073-.094.132-.215.208-.64.207-.723.546-.352-.448-.644.478-.815-.136-.491.247.24.375.137.679-.36-.118-.932-.14-.814.136-.06.201-.174-.055-.408 0 .287-.371.218-.601-.136-.951-.09.832-.953-.345-1.223.543.123.396.5.038.544.271-.04.457-1.09-.146-1.087-.271a.683.683 0 00-.407.407c.06-.47-.406-.275-.679-.68-.157.044-.467.593-.136.68-.249.62-.294-.755-.543-.136.018-.3-1.302-.368-.543-.543.022-.294-.482-.062-.679-.136-1.104 1.146-2.114 1.195-3.803 1.63.015-.812-.37-.696-.815-.814-.022-.295.482-.062.68-.136-.367-.344-.527-.106-.951-.271.291.207.057.938.678.814.011.215-.065.518.136.543-.049.192-1.198-.187-.951.678-.479-.015-.038-.196-.271-.543-.28.282-.689 0-.679-.407-.363.17-.887.466-.951-.135-.23.355-.81.465-1.766.407-.041.358.284.35.543.407a1.128 1.128 0 01-.68.68c.26-.604-.824-.246-.136-.543-.379-.138-.812-.011-1.087.407.231.049.256-.106.272-.272.244-.017.286.167.543.136-.083.121-.165.243 0 .272-.115.397-.438-.082-.68 0-.12.061-.242.12-.271.271.055.263.622.013.407.543-.913-.17-1.359-.05-2.173.136-.022.42.32.768 0 1.087-.636-.024-.452-.35-1.087-.136.3-.51-.643-.662 0-.678.018-.244-.167-.288-.136-.543h-.679c-.093.364.282.263.407.407-.115.399-.341-.177-.679 0 .162.291.588.317.815.543.523.08-.858.162-.679-.272-.293.202.148.383-.272.543-.374-.168-.209-.395-.136-.678-.269-.173-.528.08-.407-.68-.552.417-.272 1.275-.543 1.358.02.298.342.292.679.272-.371.677-1.055.205-1.901.407.18-.415.682-.585 1.086-.407.066-.43-.245-.48-.136-.951a.642.642 0 01-.407.135c.058.213.427.117.272.543-.895.26-1.241.668-1.766.68-.249-.219.096-.431-.272-.68-.427.189.188.67-.135.814-.251-.02-.083-.459-.272-.542-.27.226-.172-.013-.543 0 .242.77.938.414 1.223.814.797-.242 1.421-.056 1.901-.407.739.831-.667.629-.679 1.358-.257-.014-.095-.45-.407-.407-.185.042-.113.34-.136.543-.502-.091-.958-.309-1.359-.136-.242-.365.599-.263.136-.407.646.004 1.339.108 2.038-.407-1.112-.157-3.013.01-3.667.814.307.209.307.334 0 .543.321.068.602.158 0 .407.151.341 1.427.279 1.494-.271.425-.042-.345.392.136.407-.51.049-1.105.527-1.493.271-.101.124-.004.546-.136.952-.192-.013-.385-.022-.407.135-.36-.108.304-.639-.272-.678-.232-.007-.353.1-.408.271.1.128.247.207.408.272-.247.492-.375-.24-.68-.136.154-.427-.039-.359.136-.68.418.096.261.096.679 0-.204-.249-.567-.338-.679-.679-.213.456-.33.456-.543 0-.374.122.316.552-.407.408-.095.457.279.445.407.678-.055.338-.526.009-.407-.271-.416-.098-.4.235-.815.136.234.128.222.501.679.407.144.506-.458.267-.543.543-.241-.1-.02-.247 0-.407-.161.156-.48.153-.815.135.538.35.11.123.408.816-.158-.022-.242.03-.272.136-.262-.253-.107-.249-.543-.136.447.162.116.72 0 1.087-.371.011-.273-.229-.543 0-.053.324.619-.076.408.405-.11-.115-.372-.08-.408-.27-.201.114-.196.435-.271.679-.246-.314-.139-.813 0-1.088-.056.109.728.152.271-.271-1.062-.135-.722.985-1.358.95v.545c.484-.345.311-.071.815.136.006.201-.807.197-.135.271-.261.512-.521.314-.952.135-.068.321-.158.603-.407 0-.378.695-.888.722-1.766 1.088.141.402.913.173.951.679-.276.273-.266-.06-.542-.136-.012.191-.023.385.135.408-.315-.019-.435.178-.68-.137-.175.199-.203.746.136.679-.124.238-.252.474-.679.408.021-.159-.03-.243-.136-.272.015-.256.449-.094.407-.406-.115-.203-.437-.197-.679-.271.1.126.247.205.408.271-.301.158-.996.354-1.223.951.353.547.638-.467.951 0-.174.233-.646.167-.679.542.042.186.34.112.542.137-.02.297-.342.292-.679.272.172.482-.345.981-.815 1.222.071-.11.142-.221.136-.407-.354.101-.817.501-1.223.136-.06.528-.646.531-1.086.679.01.262.633-.235.272.272.157.021.241-.031.271-.137.417.169-.571.532.136.68-1.14.838-1.778.427-2.716 1.765.677.258-.08.377.407.679.054.327-.619-.074-.407.408-.22.038-.234-.128-.408-.136.133.417-.589.633-.951.95.034.149.271.093.272.272.139-.133.274-.27.407-.408.231.088.085.313-.136.272.088.138.313.141.272.407-.161.155-.48.154-.815.136.291.728-.528.986-.408 1.631-.392-.063-.321-.585-.679-.68-.053-.326.619.075.408-.407.239.341.224.095.542.271.024-.34-.304-.328-.407-.542-.464.124-.576.602-1.222.542.094.109.211.374 0 .409.133.138.268.273.407.407-.845.282-1.238 1.265-1.494 2.172-.386-.071-.58-.331-.954-.409.56-.296-.156-.317-.135-.815-.193-.011-.385-.022-.408.135.169-.295-.122-.708-.815-.814.123-.151.304.01.543-.271-.059-.202-.174.053-.407 0 .151-.168.118-.28-.136-.271.017-.301.576-.059.815-.136-.209-.285-.808-.05-.271-.409-.124-.1-.545-.004-.951-.135.448-.218.077-.411.135-.95.371.011.274-.228.543 0-.185.398-.368.459 0 .814.551-.519-.584-1.611.543-2.311-.833-.101-.548-.545-1.222-.678.083-.121.164-.243 0-.272.28-.07.438-.212.271-.814-.297.074-.588.848-.408.95-.04.48-.367-.479-.407 0-.331-.255.266-.492-.407-.272.121-.581.555-.446.136-.95.437-.12.187.447.544.407.238-.033.31-.234.271-.543.223.508.826.221.815-.272.195.301.332-.17.407.136.023.537-.208-.043-.407.271.224-.1 1.938.148.951.545.311.328.481.163.951.136.127-.101.206-.248.272-.408-.059-.167-.174-.278-.407-.272-.479.041.479.369 0 .408-.05.269-.11-.589-.815-.408.277-.146.71-.494.951-.271a.626.626 0 01-.135-.407c-.365-.094-.263.281-.408.407-.35-.011-.143-.581-.679-.407.381-.372.154-.508.679-.679-.055-.262-.526-.107-.407-.544.497-.029.521-.187.951 0-.135-.642-.707-.01-.815-.68.231-.049.256.106.271.272.138-.088.141-.312.408-.272v-.95c.925.49.975-.539 1.494-.543-.219-.398-.43-.055-.679-.271.432-.281.616-.193.271-.679.297-.087.433.385.408-.136.458.122.017.303.272.542.355-.597 1.121-.49.543-1.493.158.023.241-.031.271-.136.315.038.313.362.136.544.6.027.599-.543 1.087-.273-.033-.238-.234-.311-.543-.271-.282-.321.698-.003.951 0-.115-.294-.334-.48-.815-.407-.13-.254.407-.455 0-.545.066-.432.589.865.68 0 .305.586.544.173.951.137-.118-.205-.204.037-.543-.137.034-.146.271-.092.272-.271-.166-.191-.519-.307-.679-.135-.066-.221.366-.252.815-.408-.074-.197.158-.702-.136-.678.586.086.481-.385 1.494-.273.322-.39.189-.62 0-.95.501-.085.568.605.68-.136.311.087.819.27 1.086 0 .005-.202-.807-.196-.136-.271-.042-.321-.472-.252-.408-.68.577-.028 1.21.027 1.358-.543a.687.687 0 01.408.407c.11-.782.182-.418.543-.95-.059-.203-.173.053-.407 0 .426-.671 1.655.331 1.766-.814-.037-.124-.602-.361-.543-.136-.424-.219.279-.43.272-.68.338.021.04.46 0 .543.444-.099.599-.487.815-.814.472-.048.569.637.407.814h.815c-.238-.36-.281-.138-.679-.407-.065-.427.193-.531.272-.814 1.151-.133 1.352-.479 2.444-.272.147-.034.092-.27.272-.271-.088-.139-.313-.141-.272-.407.11.025.136.135.272.135.186-.189.292-.67.136-.814-.245-.017-.287.166-.543.136.071.109.142.22.135.407-.637-.261.221-.521-.135-.951.616.309.317.13.814-.136-.022.159.03.242.136.272-.004.132-.167.104-.272.135.026.109.136.135.136.272.239-.034.31-.234.271-.543.844-.004 2.48-.713 2.309-.136.949-.293 1.055-.74 1.63-1.494-.268.534.331.413.679.951.135-.104.233-.645-.407-.543.468-.257 1.002-.446 1.086-1.087.42-.034.768-.137 1.087-.271-.048-.213-.239.118-.271-.136.438-.476 1.092-.055 1.629-.543-.072.11-.142.221-.135.407.507.146.387-.337.814-.271-.256.362.167.146.543.407.11-.025.136-.136.272-.136-.07-.595-.042-.445-.136-.95.801.145 1.202-.339 1.63.272-.146-.48.058-.187.68-.543-.291-.139-1.102-.056-1.766 0v-.543c.376-.024.466.208.271.407.436-.261.686.08 1.223-.136-.002-.405-1.006.192-.814-.407.589.196 1.007-.245 1.63.136.182-.788 1.567-.643 2.309-1.223.263.011-.287.581.407.407-.072-.108-.142-.221-.136-.407.127.1.206.247.271.407.341-.112.534-.372.952-.407-.251.267.119.678.407.816.097-.12.125-.546.271-.952-.011.425 1.09.27.68 0 .219-.424.168.541.678.272-.622-.543.454-.176.544-.951.384-.143.932.223.951 0 .417.133-.156.362-.136.543.552-.457 1.584-.74 2.174-.136.022-.104.434-.716.815-.407-.329-.779.635-.899 1.63-.543-.634-.737.52.423.272-.407.351.497 1.459.374 2.173.135.283.041-.202.368.271.407.506-.448 1.371-.454 1.63-.814.144.784 1.103.761 1.63.543-.033-.35-.233.187-.543 0-.179-.675.744-.088.407-.407.097-.26.637.164.814.271-.048.178-.238.215-.271.407.159-.202.564-.159.544-.542.277.129.537.277.814.407.11-.025.136-.136.271-.136-.055-.261-.526-.107-.407-.543.672-.084.069.442.814.407.449-.842 1.296-.159 1.767-.543-.335.598.889.017 1.087.272-.048.178-.239.213-.272.407.497-.029.521-.187.951 0 .184-.133.271-.362.407-.543.063.514 1.612.736 1.902.272.251.02.083.459.271.542.16-.156.479-.153.814-.135-.228-.98.652.35 1.224-.136-.02.546.348.359.679.271.046.272-.027.425-.271.409.283.215.714.281 1.222.271v-.407c-.536-.177-.328.499-.679.136.55-.482 1.795-.272 1.901.271.326.055-.075-.618.408-.407-.353.614.629.489 1.222.543.433.226-.663.045-.68.271.591.289.828-.077 1.494.136.059.284-.093.359-.135.543.34.024.425-.208.543-.407.532.146.721.637 1.357.68-.018.387-.565.247-.95.271.077.392.1.236.272.68.296-.586.184-.256.543-.68.551.16.849-.063 1.222 0 .272 1.035 1.343.393 1.901 1.494.392-.076.236-.098.68-.271.061.476.287.576.68.407.5.216-.55-.031-.272.407.034.35.234-.187.545 0-.013.192-.022.385.135.407-.193.155-.735.038-.95 0 .071.11.142.221.136.407.299-.028.645-.552.407 0 .452-.244.769-.321 1.358-.135.024.115-.053.128-.137.135v.272c-.146-.034-.091-.27-.271-.272-.566.91 1.38.969 1.902.816.036.219-.129.233-.138.407.264-.321.419.455.815 0 .325.08-.329.285-.408.407.503.451 1.398.504 1.494 1.359.333-.076.291-.527.815-.407-.07.502-.231.341.272.271.048.591.021.625.137.951.456-.239.696.091 1.357 0-.058.258-.389.246-.272.68.015.348.507.217.68.407.01-.434-.907-.301-.407-.816.304.606.409.241.679 0 .11.026.136.136.272.136-.025.116.053.129.135.136-.099.126-.247.206-.407.271.088.139.313.14.272.407.12-.059.242-.12.272-.271.132.084-.061.731.407.814.462-.145-.38-.042-.138-.407.728-.107.453.937 1.087.543-.079.434.255.419 0 .679.404-.159.682.343.68.68.109-.071.222-.142.407-.136.331.835 1.053 1.585 1.831 2.315-.015-.225-.057-.434-.166-.608.168-.145.267-.008.418-.091-.271-.434-.388-1.493-.662-2.449.308-.3.414.188.722-.114-1.486-.254-.933-3.12-1.82-4.131.217-.11.16-.29.397-.395-1.226-1.177-.625-2.566-1.613-3.782.269-.274.374.094.606-.043-1.024-.827-.548-1.087-.901-1.518.099-.441.329-.387.747-.602-.184-.312-.52-.035-.696-.376.41-.341.424-.382.888-.368-.736-.175-1.307-.41-1.253-1.31-.341.362-.093.329-.073.676-.323-.198-1.161-2.112-.685-2.754-.223-.225-.099.25-.42.093.154-.524-.28-1.195.31-1.606.371.376.332.545.603.747-.565-.896 1.158.076.679-.718-.124-.323.366.045.44.212.31-.121-.379-.495.144-.559.071.434.225.493.603.749-.412.494-.616.694-.753 1.393.621.35.142.854.529 1.425.304.108.669-.025.979.05-.075.43-.02.347.3.77.11-.17.068-.379-.044-.605-.403-.233-.726-.781-1.257-.52-.081-.251.079-.442-.112-.722.209-.042.397-.002.606-.043-.311.555.208.138.464.514.216-.275-.576-.808.051-.978-.033.388.654.959.087 1.21.117.058.234.118.325.282a.649.649 0 01.281-.326c-.666.04.123-.672-.576-1.237.486.123-.021-.243.396-.395.11.219.29.162.395.399.26-.309-.353-.21-.16-.536 1.058-.224.058.796.953.541-.123-.209.025-.458.467-.278-.15.11-.765.923-.055 1.771-.291.069-.704-.001-.771.299.307.101.747-.338 1.026-.135.432-.287-.44-.906-.273-1.259.174.321 1.104.837.507 1.12.555.492.743-.254.68-.719.354.027.086.335.463.515-.38-.094-.205.186-.212.441-.168.145-.267.009-.42.091.313.497.271 1.455.574 2.029-.716.18-.334.056-.887.369.199.636.626.397.904.726-.794-.02-.18.303-.189.744-.173.162-.274.041-.373-.094-.283.302.293.334.346.584.076-.147-.038-.341.214-.442.074.856.503 1.118 1.087 1.565-.39.135-.006.666-.563.65.271.424.346.192.608-.043-.012.146-.019.292.138.233.056.279-.127.497-.377.698-.183-.296.003-.195.164-.255-.366-.451-.515-.275-.908.064.526.312.674.989 1.416 1.056-.178.049-.307-.097-.489-.027-.029.569.462.73.599 1.541-.301.156-.27-.375-.278-.468-.612.142-.087.573.066.91-.242.172-.429.125-.558-.144.053.942.629 1.329 1.226 1.8-.886-.475.054.187-.26.628.243.087.578-.191.698.376-.156.093-.313.184-.468.277.093.282.299.124.488.025.079.282-.033.356-.28.326.94.494-.82 2.023.292 2.354.05.179-.097.306-.025.489-.194-.029-.166-.195-.464-.515-.265.13.192.444.23.653l-.702.416c.07.117.14.233.208.352.112-.072.006-.197-.021-.305.272-.292.4-.014.653-.229-.006.164-.196.279-.025.488-.148.063-.225-.154-.325-.282.376.854.244.289.53 1.424-.168.146-.267.01-.421.093.096.187-.163.357.183.838.21-.806.287.465.3.771.587.051.346-.029.416.7-.873-.179-.433-.735-1.277-.821-.153.193.087.313.255.164.095.224-.042.385-.328.512.272.342.69.13 1.043.167zm-7.498-15.294c.286.043.307.744.788.796.154-.392-.763-1.19-.788-.796zM7.995 63.988c-.277-.085-.039-.687-.543-.543v.68c.203-.024.501.048.543-.137zm.136-1.901c-.246-.343-.703-.476-.951-.814.01.236-.03.422-.136.542.213.015.471-.018.408.272.237.01.422-.03.543-.136-.006.145.064.346.136.136zm3.26-4.754c-.391-.028-.69.033-.814.272.252.172-.292.694-.544.814-.031-.242.137-.68-.272-.544-.055.549.015 1.142 0 1.766.693-.217.17-.473.408-1.222.502-.267.79-.749 1.222-1.086zm.136.543c-.543.182-1.021.429-1.223.951.978-.027.738-.614 1.223-.951zm2.58-3.124c-.328.057-.295-.248-.679-.137.167.439-.44.104-.272.544.549.095.627-.278.951-.407zm1.63 4.075c-.282-.242-.929-.027-1.223.136.542-.036.957.341 1.223-.136zm.137-5.976c-.057.306-.745-.02-.68.407.398-.035.417.307.815.271.041-.316.29-.584-.135-.678zm1.494-.545c-.105-.411.341-1.222-.136-.814.341.221-.789.106-.814.409.105.029.157.113.135.271.437.119.186-.446.543-.407.03.239-.137.678.272.541zm.543 5.163c-.066.16-.145.308-.271.407-.002-.136-.238-.171-.271 0 .183.042.259.192.543.135.038-.083.337-.523-.001-.542zm1.222-6.656c-.567-.263-.76-.229-1.223.136.353-.083.489.053.407.406.356-.097.463-.442.816-.542zm2.038-1.767c.204-.022.501.049.543-.136-.482-.014.288-.448-.136-.407-.029.164-.151.084-.272 0-.043.184-.193.26-.135.543zm1.494 2.175c-.517.232-.848-.403-.95-.135.083.006.161.02.135.135-.122.24-.328.396-.407.68.267-.041.27.182.407.271-.098-.58.283-1.09.543-.544.032-.194.224-.23.272-.407zm.407-5.026c-.51-.103-.295.518-.679.543v-.409h-.679c.005.188-.064.299-.136.409.428-.066.307.417.815.271.273-.226.631-.365.679-.814zm3.396-1.902c-.371-.1-.273.27-.543.271-.108-.292-.125.501 0 .543.059-.26.389-.246.272-.68.19.012.519-.03.271-.134zm2.174 3.803c-.369-.061-.636-.129-.815 0-.189.247.875 1.04.815 0zm-.272.679c-.028.391.034.689.271.814-.082-.278.22-.943-.271-.814zm5.433-5.977c-.346.017-.699.025-.679.407.418-.094.261-.094.679 0v-.407zm1.902-2.037c-.348-.124-.77-.219-.951.136.483-.115.814.393.951-.136zm1.087 3.124c-.665.132-.947.12-1.222.409.337.02.039.459 0 .543.183.042.259.192.542.135-.341-.385-.156-.678.543-.678-.005-.189.065-.3.137-.409zm1.901-3.531c.187-.006.298.064.408.136-.043-.316.022-.521.136-.68-.645.064-.15-.168-.407-.407-.28-.12-.61.352-.272.407-.139.107.254.063.135.544zm.815 1.086c-.434.117-.42-.213-.679-.271.274.436-.537.424-.136.542.173-.007.188-.174.408-.135.03.105.003.269.136.271.012-.213.346-.106.271-.407zm3.939-1.765h-.408c.041 1.314.672 1.002.136.271.166-.015.322-.041.272-.271zm2.446.135c-.375.047-.954-.389-1.223 0 .171.156 1.071.273 1.223 0zm.95 1.223c-.327.271-.658-.237-.951.136.423.093.228.413 0 .542.236-.01.422.031.543.136-.01-.432.157-.407.408-.814zm3.26-2.037c-.058-.302-.721-.107-.815 0-.195.423 1.009.423.815 0zm1.085.407c-.269-.001-.172-.371-.542-.271.099.369-.271.272-.271.543.39.028.688-.035.813-.272zm1.36-.407c-.337-.269-1.037-.031-1.359.136.371-.1.273.27.544.271.019-.669.509-.024.815-.407zm.679-2.038c-.27-.003-.173-.371-.543-.272.054.326-.619-.074-.408.407.402-.327.662.531.951-.135zm3.667 2.581c-.34.022-.329-.305-.543-.407.076 0 .154-.111 0-.136-.019.376-.203.871-.136 1.087.03-.107.114-.159.271-.136.03.105.004.268.136.272-.02-.339.214-.422.272-.68zm3.26-.407c.018.334.021.654-.137.814.578-.027.651-.717.137-.814zm.679.678c.021.385-.408.317-.407.68h.543c-.149-.347.464-.7-.136-.68zm4.347 0c-.201-.07-.342-.201-.544-.271-.18.286.067.401-.136.814.255.007.288-.104.136-.271.309.038.511-.033.544-.272zm15.622 10.867c-.047-.317-.141-.585-.409-.68-.168.394-.069.621.409.68zm2.172 1.087c-.193-.033-.229-.223-.407-.272-.01.794-1.018-.144-1.088.68.343-.291 1.375.108 1.495-.408zm1.223.407c-.332.185-.085.271-.272.407-.172-.055-.278-.174-.272-.407.16-.021.386.024.408-.135-.255-.169-1.106-.585-.815-.136.174-.313.65.291.136.405.17.058.277.177.271.409.597.2 1.144-.347.544-.543zm2.581-.544c-.512.227-.62-.631-.816-.271.205.119-.038.203.137.545.337.019.658.025.679-.274zm1.358 6.793c.021-.339-.214-.42-.272-.68-.308-.066-.815.341-.407.543.203-.449.332.282.679.137zm-22.571-8.549c.101.157.098.288.092.418.157-.1.289-.097.419-.09.082-.283-.18-.599-.511-.328zm-.354 1c-.154-.3-.314-.58-.58-.445.097.315.144.648.58.445zm.628.258c-.154.092-.229-.14-.372-.094.066.241-.154.023-.303.021.186.311.37.623.555.934.148-.063.319-.215.42-.09-.124.1-.018.26.091.42.473-.685-.913-.618-.391-1.191zm2.381-.781c.03-.132-.104-.284-.28-.439.034.107.081.223.093.361a.45.45 0 00.187.078zm1.464.869c-.504.169.195.646-.307.813.215.462.584-.512.307-.813zm4.005 4.888c-.158.1-.289.097-.42.092-.009.338.263.31.301.769.378-.2-.054-.608.119-.861zm3.796.274c-.247.195-.329-.26-.558-.142.113.146-.587.552-.027.488-.035-.075-.064-.149.048-.187.147-.106.635.267.537-.159zm7.425 1.596c-.166.189-.772.267-.632.533.186-.131.966-.064.632-.533zm2.623 1.76c-.286.218-.48.064-.628-.26-.209.11-.348.241-.397.395-.101-.159-.098-.291-.092-.421-.248.197-.458.248-.652.229.322.205.157.402.394.399.132-.364.924-.013 1.28.027-.09-.153.143-.225.095-.369zm5.465-12.881c-.32.385.031.478-.376.697.119.254.351 1.231.533.63-.375.055-.022-.521-.113-.722.293.338.243.591.369.887.446-.084.174-.353.329-.511.068.118.177.083.254.164-.218.109-.204.278-.025.489.208-.145.344-.309.33-.511-.721-.017-.061-.728-.673-.865.161.306.1.554-.189.744-.042-.208-.003-.396-.045-.605-.346.348-.426-.262-.394-.397zm-2.69 11.293c.147.039.313.067.477.08l-.103-.374a.53.53 0 00-.374.294zm2.887-8.567c-.567.125-.202-.284-.348-.584-.591.312-.639-.484-.717-.678-.163.124-.458.213-.399.395.52.284 1.039.647.949 1.333.285.079.529-.199.515-.466zm-1.087-1.565c.469-.056-.121-.874-.301-.77-.051.218.113.491.301.77zm.576-3.817c-.148.454.809 1.128.486.817-.278-.248-.027-.851-.486-.817zm-.598-1.54c.138.397.729.988.767.491-.298-.039-.249-.64-.767-.491zm-1.157-1.684c.334.244.608.73.88 1.216.323-.236.712.21.585-.347-.182.056-.322-.034-.538.16-.047-.1-.491-1.241-.927-1.029zm2.02 21.231c-.507-.031-.878-.494-.555-.934-.283-.305-.183.26-.466.276-.352-.29-.169-.258-.416-.7-.062-.47.341.414.51.328.215-.661-.474-.577-.811-1.098a20.49 20.49 0 00-.407-1.772c-.819.364-.029 1.539-1.446 1.472-.05.231.104.257.271.272-.007.154-.1.222-.231.253a.55.55 0 00.369.001c-.01.147-.019.292.139.233-.48.574.591.411.368.888.385.043.809-.06 1.07.47.217-.109.159-.289.396-.393-.161.84.155-.135.532.63-.238-.093-.567.15-.744-.189-.264.131.194.446.23.654.313-.572.675-.062 1.191-.391zm.538-.16c-.022-.199-.484-1.27-.977-.844.305.362.65.568.977.844zm.569-2.233c-.269.359-.831-.045-.771.299.183-.067.286.177.442.212-.05.473-.451.241-.375.696.226-.07.064.166.207.352.22-.407.375-.83.518-1.256.206.359.46.532.767.493-.08-.164-.163-.773-.208-.352.036.076.064.149-.048.188-.126-.408-.404-.225-.532-.632z"
      />
    </svg>
  );
}
