// import { Heading, Text, Center } from "@gluestack-ui/themed";
// import { Header } from "../components";
// import { useLocalSearchParams } from "expo-router";

// const NewsDetail = () => {
//   const params = useLocalSearchParams();
//   return (
//     <>
//       <Header title={"News"} withBack={true} />
//       <Center flex={1} padding={"$4"}>
//         <Heading>News Detail</Heading>
//         <Text textAlign="center">{params.title}</Text>
//       </Center>
//     </>
//   );
// };

// export default NewsDetail;

// Tugas/

import { Text, Image, Divider } from "@gluestack-ui/themed";
import { Header } from "../components";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
      <Image
          source={{ uri: params.image }}
          w="100%"
          h="20%"
          alt="Image Data"
        />
        <Text padding={"$4"}>{params.date}</Text>
        <Text padding={"$3"} fontSize={25} fontWeight="bold">{params.title}</Text>
        <Divider bg="gray" h={1} my={1} marginHorizontal={10} />
        <Text padding={"$4"} textAlign="justify">{params.content}</Text>
        </ScrollView>
    </>
  );
};

export default NewsDetail;

