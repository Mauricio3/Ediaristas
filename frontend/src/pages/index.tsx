import type { NextPage } from 'next';
import SafeEnvironmnet from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/Title/PageTitle';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironmnet />
      <PageTitle title={'Conheça os profissionais'} subtitle={'Preencha seu endereço e conheça todos os profissoinais da sua localidade'}/>
    </div>
  )
}

export default Home
