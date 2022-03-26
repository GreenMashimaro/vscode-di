import { SyncDescriptor } from '@/instantiation/descriptors';
import { IInstantiationService } from '@/instantiation/instantiation';
import { InstantiationService } from '@/instantiation/instantiationService';
import { ServiceCollection } from '@/instantiation/serviceCollection';
import { IWorkbenchLayoutService } from '../services/layout/browser/layoutService';

class EditorPanes {
  constructor(@IWorkbenchLayoutService private readonly layoutService: IWorkbenchLayoutService) {
    console.log('in editor panes');
    this.test();
  }

  test() {
    this.layoutService.updateWindowMaximizedState(false);
  }

  handleRun() {
    console.log('zzn handleRun~');
  }
}

export class WorkbenchLayoutServiceImpl implements IWorkbenchLayoutService {
  declare readonly _serviceBrand: undefined;
  updateWindowMaximizedState() {
    console.log('run updateWindowMaximizedState');
  }
  focus() {
    console.log('I\'m focus');
  }
}

const services = new ServiceCollection();
services.set(IWorkbenchLayoutService, new SyncDescriptor(WorkbenchLayoutServiceImpl));

const instantiationService: IInstantiationService = new InstantiationService(services, true);

const aaa = instantiationService.createInstance(EditorPanes);

// instantiationService.invokeFunction(accessor => {
// 	// const workbenchLayoutService = accessor.get(IWorkbenchLayoutService);
// 	// workbenchLayoutService.focus();
// });
