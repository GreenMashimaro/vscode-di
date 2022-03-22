// const serviceCollection = new ServiceCollection();

// const instantiationService = new InstantiationService(serviceCollection, true);

function DecTest(target: Function, key: string, index: number): any {
  console.log('zzn target, key, index:', target, key, index);
}

interface User {
  name: string;
}

class EditorPanes {
  constructor(@DecTest private readonly layoutService: User) {
  }

  test() {
  }
}