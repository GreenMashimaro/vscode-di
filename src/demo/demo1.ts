import { SyncDescriptor } from '@/instantiation/descriptors';
import { InstantiationService } from '@/instantiation/instantiationService';
import { ServiceCollection } from '@/instantiation/serviceCollection';
import { IWorkbenchLayoutService } from '../services/layout/browser/layoutService';

class EditorPanes {
  constructor(@IWorkbenchLayoutService private readonly layoutService: IWorkbenchLayoutService) {
  }

  test() {
    this.layoutService.updateWindowMaximizedState(false);
  }
}

export class WorkbenchLayoutServiceImpl implements IWorkbenchLayoutService {
  declare readonly _serviceBrand: undefined;
  updateWindowMaximizedState() {}
  focus() {
    console.log('I\'m focus');
  }
}

const services = new ServiceCollection();
services.set(IWorkbenchLayoutService, new SyncDescriptor(WorkbenchLayoutServiceImpl));

const instantiationService = new InstantiationService(services, true);
instantiationService.invokeFunction(accessor => {
	const workbenchLayoutService = accessor.get(IWorkbenchLayoutService);
	workbenchLayoutService.focus();
});