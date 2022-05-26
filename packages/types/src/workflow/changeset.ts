import { Workflow } from '.';
import { ChangesetEvent } from '../event/changeset';

export interface ChangesetWorkflow extends Workflow<ChangesetEvent> {}
