import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import useCachedResources from './src/hooks/useCachedResources';
import { Loader } from './src/components/Loader';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}
