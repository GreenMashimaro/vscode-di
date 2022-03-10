import { IWorkbenchLayoutService } from '../services/layout/browser/layoutService';

class EditorPanes {
  constructor(@IWorkbenchLayoutService private readonly layoutService: IWorkbenchLayoutService) {
  }

  test() {
    this.layoutService.updateWindowMaximizedState(false);
  }
}