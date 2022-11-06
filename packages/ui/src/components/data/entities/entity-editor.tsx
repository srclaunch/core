import { Model } from '@srclaunch/types';
import { RootState, useDispatch, useSelector } from '@srclaunch/web-app-state';
import pluralize from 'pluralize';
import { memo, ReactElement, useEffect, useState } from 'react';

import { getFormFieldsFromModel } from '../../../lib/forms/fields';
import { useEntityEditor } from '../../../lib/hooks/use-entity-editor';
import { Amount } from '../../../types';
import { Form } from '../../forms/form';
import { Container, ContainerProps } from '../../layout/container';
import { ErrorLabel } from '../../typography/labels/errors/error-label';

export const EntityEditor = memo(
  ({
    actions,
    className = '',
    id,
    model,
  }: ContainerProps<{
    readonly actions?: Record<
      string,
      (...arguments_: readonly unknown[]) => unknown
    >;
    readonly id?: string;
    readonly model: Model;
  }>): ReactElement => {
    const dispatch = useDispatch();
    const { entity: entityFields, hideEntityEditor } = useEntityEditor();
    const [dispatched, setDispatched] = useState(false);
    const inProgress = useSelector(
      (state: RootState) => state[`${model?.name}.inProgress`],
    );
    const pluralizedCamel = pluralize(
      model?.name?.[0]?.toLowerCase() + model?.name.slice(1),
    );
    const entity = useSelector(
      (state: RootState) => state[pluralizedCamel].entities[id ?? ''],
    );

    useEffect(() => {
      if (actions && id && !entity && !dispatched) {
        const action = actions[`get${model.name}`]?.(id);

        setDispatched(true);
        dispatch(action);
      }
    }, [id, entity]);

    if (id && !entity && !inProgress) {
      return (
        <Container
          className={`${className} entity-editor`}
          padding={Amount.More}
        >
          <ErrorLabel>Entity not found</ErrorLabel>
        </Container>
      );
    }

    return (
      <Container className={`${className} entity-editor`}>
        <Form
          fields={getFormFieldsFromModel({ model })}
          entity={{ ...entity, ...entityFields }}
          onSubmitted={async ({
            fields,
            // validation
          }) => {
            let fieldData = {};

            for (const [key, properties] of Object.entries(fields)) {
              fieldData = { ...fieldData, [key]: properties.value };
            }

            if (id) {
              const editFunction = actions?.[`update${model.name}`];

              if (editFunction)
                await dispatch(editFunction({ id, ...fieldData }));

              hideEntityEditor();
            } else {
              const createFunction = actions?.[`create${model.name}`];

              if (createFunction) await dispatch(createFunction(fieldData));

              hideEntityEditor();
            }
          }}
          inProgress={inProgress}
          model={model}
          name="entity-editor"
          submitButton={{
            label: id ? 'Update' : 'Create',
          }}
        />

        {/* <Form action={id ? 'new' : 'update'} model={model} fields={fields}> */}
        {/* {[...Object.entries(model.fields)].map((field, k) => {
          console.log('field', field);

          return (
            <DynamicInput
              onChange={val => updateField(field[0], val)}
              label={field[1].label}
              type={field[1].type}
              key={k}
            />
          );
        })} */}

        {/* <FormActions>
          <Button
            disabled={false}
            onClick={() => {
              if (id) {
                ModelService.update({ model });
              }

              ModelService.create({ model: { fields, name: model.name } });
            }}
          >
            {id ? 'Update' : 'Create'} {model.name}
          </Button>
          <Button onClick={() => dispatch(hideModelPanel())}>Cancel</Button>
        </FormActions> */}
        {/* </Form> */}
      </Container>
    );
  },
);
