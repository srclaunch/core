import {
  CurrencyCode,
  LanguageCode,
  LocaleCode,
  ModelProps,
  Primitives,
} from "@srclaunch/types";

export default <ModelProps>{
  description: "A user that signs into the application",
  fields: {
          
      created_date: {
        label: 'Created Date',
        required: false,
        type: Primitives.DateTime,
      },
      updated_date: {
        label: 'Updated Date',
        required: false,
        type: Primitives.DateTime,
      },
    
          PersonId: {
            label: 'Person',
            required: false,
            type: Primitives.UUID
          },
          
          TeamId: {
            label: 'Team',
            required: false,
            type: Primitives.UUID
          },
          
    access: {
      label: "Access Details",
      type: Primitives.JSON,
    },
    cognito_id: {
      label: "Cognito ID",
      type: Primitives.String,
    },
    membership: {
      label: "Membership",
      type: Primitives.JSON,
    },
    onboarding: {
      label: "Onboarding",
      type: Primitives.JSON,
    },
    preferences: {
      defaultValue: {
        accessibility: {
          outlines: false,
        },
        localization: {
          currency: CurrencyCode.UnitedStatesDollar,
          language: LanguageCode.English,
          locale: LocaleCode.EnglishUnitedStates,
        },
        look_and_feel: {
          theme: "light",
        },
      },
      label: "Preferences",
      type: Primitives.JSON,
    },
  },
  name: "User",
  relationships: {
    belongsTo: ["Person", "Team"]
  },
};