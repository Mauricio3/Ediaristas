import type { NextPage } from 'next';
import SafeEnvironmnet from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/Title/PageTitle';
import { PageTitleContainer } from 'ui/components/data-display/Title/PageTitle.style';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironmnet />
      <PageTitleContainer>
        <PageTitle
          title={'Conheça os profissionais'}
          subtitle={'Preencha seu endereço e conheça todos os profissoinais da sua localidade'}
        >
        </PageTitle>
      </PageTitleContainer>
    </div>
  )
}

export default Home
