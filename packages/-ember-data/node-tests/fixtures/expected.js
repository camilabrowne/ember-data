module.exports = {
  modules: [
    '@ember-data/adapter',
    '@ember-data/canary-features',
    '@ember-data/debug',
    '@ember-data/model',
    '@ember-data/store',
    '@ember-data/deprecations',
    '@ember-data/record-data',
    '@ember-data/serializer'
  ],
  classitems: [
    '(private) @ember-data/adapter BuildURLMixin#_buildURL',
    '(private) @ember-data/adapter BuildURLMixin#urlPrefix',
    '(private) @ember-data/adapter JSONAPIAdapter#ajaxOptions',
    '(private) @ember-data/adapter RESTAdapter#_ajaxRequest',
    '(private) @ember-data/adapter RESTAdapter#_najaxRequest',
    '(private) @ember-data/adapter RESTAdapter#ajax',
    '(private) @ember-data/adapter RESTAdapter#ajaxOptions',
    '(private) @ember-data/adapter RESTAdapter#generatedDetailedMessage',
    '(private) @ember-data/adapter RESTAdapter#normalizeErrorResponse',
    '(private) @ember-data/adapter RESTAdapter#parseErrorResponse',
    '(private) @ember-data/debug InspectorDataAdapter#columnNameToDesc',
    '(private) @ember-data/debug InspectorDataAdapter#columnsForType',
    '(private) @ember-data/debug InspectorDataAdapter#getFilters',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordColor',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordColumnValues',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordFilterValues',
    '(private) @ember-data/debug InspectorDataAdapter#getRecordKeywords',
    '(private) @ember-data/model Model#_debugInfo',
    '(private) @ember-data/model Model#_internalModel',
    '(private) @ember-data/model Model#_notifyProperties',
    '(private) @ember-data/model Model#create',
    '(private) @ember-data/model Model#currentState',
    '(private) @ember-data/model Model#recordData',
    '(private) @ember-data/model Model#send',
    '(private) @ember-data/model Model#transitionTo',
    '(private) @ember-data/model Model#trigger',
    '(private) @ember-data/serializer EmbeddedRecordsMixin#_extractEmbeddedBelongsTo',
    '(private) @ember-data/serializer EmbeddedRecordsMixin#_extractEmbeddedHasMany',
    '(private) @ember-data/serializer EmbeddedRecordsMixin#_extractEmbeddedRecords',
    '(private) @ember-data/serializer EmbeddedRecordsMixin#_normalizeEmbeddedRelationship',
    '(private) @ember-data/serializer JSONAPISerializer#_extractType',
    '(private) @ember-data/serializer JSONAPISerializer#_normalizeDocumentHelper',
    '(private) @ember-data/serializer JSONAPISerializer#_normalizeRelationshipDataHelper',
    '(private) @ember-data/serializer JSONAPISerializer#_normalizeResourceHelper',
    '(private) @ember-data/serializer JSONAPISerializer#_normalizeResponse',
    '(private) @ember-data/serializer JSONSerializer#_canSerialize',
    '(private) @ember-data/serializer JSONSerializer#_getMappedKey',
    '(private) @ember-data/serializer JSONSerializer#_mustSerialize',
    '(private) @ember-data/serializer JSONSerializer#_normalizeResponse',
    '(private) @ember-data/serializer JSONSerializer#applyTransforms',
    '(private) @ember-data/serializer JSONSerializer#normalizeRelationships',
    '(private) @ember-data/serializer JSONSerializer#normalizeUsingDeclaredMapping',
    '(private) @ember-data/serializer JSONSerializer#transformFor',
    '(private) @ember-data/serializer RESTSerializer#_normalizeArray',
    '(private) @ember-data/store Errors#_add',
    '(private) @ember-data/store Errors#_clear',
    '(private) @ember-data/store Errors#_findOrCreateMessages',
    '(private) @ember-data/store Errors#_registerHandlers',
    '(private) @ember-data/store Errors#_remove',
    '(private) @ember-data/store Errors#content',
    '(private) @ember-data/store Errors#errorsByAttributeName',
    '(private) @ember-data/store Errors#unknownProperty',
    '(private) @ember-data/store IdentityMap#flushPendingSave',
    '(private) @ember-data/store ManyArray#createRecord',
    '(private) @ember-data/store ManyArray#isPolymorphic',
    '(private) @ember-data/store ManyArray#promise',
    '(private) @ember-data/store ManyArray#relationship',
    '(private) @ember-data/store RecordArray#content',
    '(private) @ember-data/store RecordArray#objectAtContent',
    '(private) @ember-data/store RecordArray#store',
    '(private) @ember-data/store RecordArrayManager#_associateWithRecordArray',
    '(private) @ember-data/store RecordArray#_pushInternalModels',
    '(private) @ember-data/store RecordArray#_removeInternalModels',
    '(private) @ember-data/store RecordArray#_unregisterFromManager',
    '(private) @ember-data/store SnapshotRecordArray#_recordArray',
    '(private) @ember-data/store SnapshotRecordArray#_snapshots',
    '(private) @ember-data/store Store#_didUpdateAll',
    '(private) @ember-data/store Store#_fetchAll',
    '(private) @ember-data/store Store#_fetchRecord',
    '(private) @ember-data/store Store#_generateId',
    '(private) @ember-data/store Store#_load',
    '(private) @ember-data/store Store#_reloadRecord',
    '(private) @ember-data/store Store#defaultAdapter',
    '(private) @ember-data/store Store#didSaveRecord',
    '(private) @ember-data/store Store#diffArray',
    '(private) @ember-data/store Store#find',
    '(private) @ember-data/store Store#findBelongsTo',
    '(private) @ember-data/store Store#findByIds',
    '(private) @ember-data/store Store#findHasMany',
    '(private) @ember-data/store Store#findMany',
    '(private) @ember-data/store Store#flushPendingSave',
    '(private) @ember-data/store Store#init',
    '(private) @ember-data/store Store#recordForId',
    '(private) @ember-data/store Store#recordWasError',
    '(private) @ember-data/store Store#recordWasInvalid',
    '(private) @ember-data/store Store#scheduleSave',
    '(private) @ember-data/store Store#setRecordId',
    '(protected) Ember.Inflector#inflect',
    '(public) @ember-data/adapter Adapter#coalesceFindRequests',
    '(public) @ember-data/adapter Adapter#createRecord',
    '(public) @ember-data/adapter Adapter#defaultSerializer',
    '(public) @ember-data/adapter Adapter#deleteRecord',
    '(public) @ember-data/adapter Adapter#findAll',
    '(public) @ember-data/adapter Adapter#findMany',
    '(public) @ember-data/adapter Adapter#findRecord',
    '(public) @ember-data/adapter Adapter#generateIdForRecord',
    '(public) @ember-data/adapter Adapter#groupRecordsForFindMany',
    '(public) @ember-data/adapter Adapter#query',
    '(public) @ember-data/adapter Adapter#queryRecord',
    '(public) @ember-data/adapter Adapter#serialize',
    '(public) @ember-data/adapter Adapter#shouldBackgroundReloadAll',
    '(public) @ember-data/adapter Adapter#shouldBackgroundReloadRecord',
    '(public) @ember-data/adapter Adapter#shouldReloadAll',
    '(public) @ember-data/adapter Adapter#shouldReloadRecord',
    '(public) @ember-data/adapter Adapter#updateRecord',
    '(public) @ember-data/adapter BuildURLMixin#buildURL',
    '(public) @ember-data/adapter BuildURLMixin#pathForType',
    '(public) @ember-data/adapter BuildURLMixin#urlForCreateRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForDeleteRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindAll',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindBelongsTo',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindHasMany',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindMany',
    '(public) @ember-data/adapter BuildURLMixin#urlForFindRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForQuery',
    '(public) @ember-data/adapter BuildURLMixin#urlForQueryRecord',
    '(public) @ember-data/adapter BuildURLMixin#urlForUpdateRecord',
    '(public) @ember-data/adapter JSONAPIAdapter#coalesceFindRequests',
    '(public) @ember-data/adapter MinimumAdapterInterface#coalesceFindRequests [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#createRecord',
    '(public) @ember-data/adapter MinimumAdapterInterface#deleteRecord',
    '(public) @ember-data/adapter MinimumAdapterInterface#findAll',
    '(public) @ember-data/adapter MinimumAdapterInterface#findBelongsTo [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#findMany [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#findRecord',
    '(public) @ember-data/adapter MinimumAdapterInterface#findhasMany [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#generateIdForRecord [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#groupRecordsForFindMany [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#query',
    '(public) @ember-data/adapter MinimumAdapterInterface#queryRecord',
    '(public) @ember-data/adapter MinimumAdapterInterface#shouldBackgroundReloadAll [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#shouldBackgroundReloadRecord [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#shouldReloadAll [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#shouldReloadRecord [OPTIONAL]',
    '(public) @ember-data/adapter MinimumAdapterInterface#updateRecord',
    '(public) @ember-data/adapter MinimumAdapterInterface#destroy [OPTIONAL]',
    '(public) @ember-data/adapter RESTAdapter#buildQuery',
    '(public) @ember-data/adapter RESTAdapter#coalesceFindRequests',
    '(public) @ember-data/adapter RESTAdapter#createRecord',
    '(public) @ember-data/adapter RESTAdapter#deleteRecord',
    '(public) @ember-data/adapter RESTAdapter#findAll',
    '(public) @ember-data/adapter RESTAdapter#findBelongsTo',
    '(public) @ember-data/adapter RESTAdapter#findHasMany',
    '(public) @ember-data/adapter RESTAdapter#findMany',
    '(public) @ember-data/adapter RESTAdapter#findRecord',
    '(public) @ember-data/adapter RESTAdapter#groupRecordsForFindMany',
    '(public) @ember-data/adapter RESTAdapter#handleResponse',
    '(public) @ember-data/adapter RESTAdapter#headers',
    '(public) @ember-data/adapter RESTAdapter#host',
    '(public) @ember-data/adapter RESTAdapter#isInvalid',
    '(public) @ember-data/adapter RESTAdapter#isSuccess',
    '(public) @ember-data/adapter RESTAdapter#namespace',
    '(public) @ember-data/adapter RESTAdapter#query',
    '(public) @ember-data/adapter RESTAdapter#queryRecord',
    '(public) @ember-data/adapter RESTAdapter#sortQueryParams',
    '(public) @ember-data/adapter RESTAdapter#updateRecord',
    '(public) @ember-data/debug InspectorDataAdapter#watchModelTypes',
    '(public) @ember-data/model @ember-data/model#attr',
    '(public) @ember-data/model @ember-data/model#belongsTo',
    '(public) @ember-data/model @ember-data/model#hasMany',
    '(public) @ember-data/model Model#adapterError',
    '(public) @ember-data/model Model#attributes',
    '(public) @ember-data/model Model#becameError',
    '(public) @ember-data/model Model#becameInvalid',
    '(public) @ember-data/model Model#belongsTo',
    '(public) @ember-data/model Model#changedAttributes',
    '(public) @ember-data/model Model#deleteRecord',
    '(public) @ember-data/model Model#destroyRecord',
    '(public) @ember-data/model Model#didCreate',
    '(public) @ember-data/model Model#didDelete',
    '(public) @ember-data/model Model#didLoad',
    '(public) @ember-data/model Model#didUpdate',
    '(public) @ember-data/model Model#dirtyType',
    '(public) @ember-data/model Model#eachAttribute',
    '(public) @ember-data/model Model#eachRelatedType',
    '(public) @ember-data/model Model#eachRelationship',
    '(public) @ember-data/model Model#eachTransformedAttribute',
    '(public) @ember-data/model Model#errors',
    '(public) @ember-data/model Model#fields',
    '(public) @ember-data/model Model#hasDirtyAttributes',
    '(public) @ember-data/model Model#hasMany',
    '(public) @ember-data/model Model#id',
    '(public) @ember-data/model Model#inverseFor',
    '(public) @ember-data/model Model#isDeleted',
    '(public) @ember-data/model Model#isEmpty',
    '(public) @ember-data/model Model#isError',
    '(public) @ember-data/model Model#isLoaded',
    '(public) @ember-data/model Model#isLoading',
    '(public) @ember-data/model Model#isNew',
    '(public) @ember-data/model Model#isReloading',
    '(public) @ember-data/model Model#isSaving',
    '(public) @ember-data/model Model#isValid',
    '(public) @ember-data/model Model#modelName',
    '(public) @ember-data/model Model#ready',
    '(public) @ember-data/model Model#relatedTypes',
    '(public) @ember-data/model Model#relationshipNames',
    '(public) @ember-data/model Model#relationships',
    '(public) @ember-data/model Model#relationshipsByName',
    '(public) @ember-data/model Model#reload',
    '(public) @ember-data/model Model#rollbackAttributes',
    '(public) @ember-data/model Model#rolledBack',
    '(public) @ember-data/model Model#save',
    '(public) @ember-data/model Model#serialize',
    '(public) @ember-data/model Model#store',
    '(public) @ember-data/model Model#toJSON',
    '(public) @ember-data/model Model#toString',
    '(public) @ember-data/model Model#transformedAttributes',
    '(public) @ember-data/model Model#typeForRelationship',
    '(public) @ember-data/model Model#unloadRecord',
    '(public) @ember-data/serializer EmbeddedRecordsMixin#normalize',
    '(public) @ember-data/serializer EmbeddedRecordsMixin#removeEmbeddedForeignKey',
    '(public) @ember-data/serializer EmbeddedRecordsMixin#serializeBelongsTo',
    '(public) @ember-data/serializer EmbeddedRecordsMixin#serializeHasMany',
    '(public) @ember-data/serializer JSONAPISerializer#extractRelationship',
    '(public) @ember-data/serializer JSONAPISerializer#extractRelationships',
    '(public) @ember-data/serializer JSONAPISerializer#keyForAttribute',
    '(public) @ember-data/serializer JSONAPISerializer#keyForRelationship',
    '(public) @ember-data/serializer JSONAPISerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer JSONAPISerializer#payloadKeyFromModelName',
    '(public) @ember-data/serializer JSONAPISerializer#pushPayload',
    '(public) @ember-data/serializer JSONSerializer#attrs',
    '(public) @ember-data/serializer JSONSerializer#extractAttributes',
    '(public) @ember-data/serializer JSONSerializer#extractErrors',
    '(public) @ember-data/serializer JSONSerializer#extractId',
    '(public) @ember-data/serializer JSONSerializer#extractMeta',
    '(public) @ember-data/serializer JSONSerializer#extractPolymorphicRelationship',
    '(public) @ember-data/serializer JSONSerializer#extractRelationship',
    '(public) @ember-data/serializer JSONSerializer#extractRelationships',
    '(public) @ember-data/serializer JSONSerializer#keyForAttribute',
    '(public) @ember-data/serializer JSONSerializer#keyForLink',
    '(public) @ember-data/serializer JSONSerializer#keyForRelationship',
    '(public) @ember-data/serializer JSONSerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer JSONSerializer#normalize',
    '(public) @ember-data/serializer JSONSerializer#normalizeArrayResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeCreateRecordResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeDeleteRecordResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeFindAllResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeFindBelongsToResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeFindHasManyResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeFindManyResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeFindRecordResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeQueryRecordResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeQueryResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeSaveResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeSingleResponse',
    '(public) @ember-data/serializer JSONSerializer#normalizeUpdateRecordResponse',
    '(public) @ember-data/serializer JSONSerializer#primaryKey',
    '(public) @ember-data/serializer JSONSerializer#serialize',
    '(public) @ember-data/serializer JSONSerializer#serializeAttribute',
    '(public) @ember-data/serializer JSONSerializer#serializeBelongsTo',
    '(public) @ember-data/serializer JSONSerializer#serializeHasMany',
    '(public) @ember-data/serializer JSONSerializer#serializeIntoHash',
    '(public) @ember-data/serializer JSONSerializer#serializePolymorphicType',
    '(public) @ember-data/serializer JSONSerializer#shouldSerializeHasMany',
    '(public) @ember-data/serializer MinimumSerializerInterface#normalize [OPTIONAL]',
    '(public) @ember-data/serializer MinimumSerializerInterface#normalizeResponse',
    '(public) @ember-data/serializer MinimumSerializerInterface#pushPayload [OPTIONAL]',
    '(public) @ember-data/serializer MinimumSerializerInterface#serialize',
    '(public) @ember-data/serializer MinimumSerializerInterface#serializeIntoHash [OPTIONAL]',
    '(public) @ember-data/serializer RESTSerializer#extractPolymorphicRelationship',
    '(public) @ember-data/serializer RESTSerializer#keyForPolymorphicType',
    '(public) @ember-data/serializer RESTSerializer#modelNameFromPayloadKey',
    '(public) @ember-data/serializer RESTSerializer#normalize',
    '(public) @ember-data/serializer RESTSerializer#payloadKeyFromModelName',
    '(public) @ember-data/serializer RESTSerializer#pushPayload',
    '(public) @ember-data/serializer RESTSerializer#serialize',
    '(public) @ember-data/serializer RESTSerializer#serializeIntoHash',
    '(public) @ember-data/serializer RESTSerializer#serializePolymorphicType',
    '(public) @ember-data/serializer Serializer#normalize',
    '(public) @ember-data/serializer Serializer#normalizeResponse',
    '(public) @ember-data/serializer Serializer#serialize',
    '(public) @ember-data/serializer Serializer#store',
    '(public) @ember-data/serializer Transform#deserialize',
    '(public) @ember-data/serializer Transform#serialize',
    '(public) @ember-data/store @ember-data/store#normalizeModelName',
    '(public) @ember-data/store BelongsToReference#id',
    '(public) @ember-data/store BelongsToReference#load',
    '(public) @ember-data/store BelongsToReference#push',
    '(public) @ember-data/store BelongsToReference#reload',
    '(public) @ember-data/store BelongsToReference#value',
    '(public) @ember-data/store Errors#add',
    '(public) @ember-data/store Errors#errorsFor',
    '(public) @ember-data/store Errors#has',
    '(public) @ember-data/store Errors#isEmpty',
    '(public) @ember-data/store Errors#length',
    '(public) @ember-data/store Errors#messages',
    '(public) @ember-data/store Errors#remove',
    '(public) @ember-data/store HasManyReference#ids',
    '(public) @ember-data/store HasManyReference#load',
    '(public) @ember-data/store HasManyReference#push',
    '(public) @ember-data/store HasManyReference#reload',
    '(public) @ember-data/store HasManyReference#remoteType',
    '(public) @ember-data/store HasManyReference#value',
    '(public) @ember-data/store IdentityMap#clear',
    '(public) @ember-data/store IdentityMap#errorsArrayToHash',
    '(public) @ember-data/store IdentityMap#errorsHashToArray',
    '(public) @ember-data/store IdentityMap#retrieve',
    '(public) @ember-data/store InternalModelMap#clear',
    '(public) @ember-data/store InternalModelMap#get',
    '(public) @ember-data/store InternalModelMap#metadata',
    '(public) @ember-data/store InternalModelMap#models',
    '(public) @ember-data/store ManyArray#isLoaded',
    '(public) @ember-data/store ManyArray#meta',
    '(public) @ember-data/store ManyArray#reload',
    '(public) @ember-data/store ManyArray#save',
    '(public) @ember-data/store RecordArray#isLoaded',
    '(public) @ember-data/store RecordArray#isUpdating',
    '(public) @ember-data/store RecordArray#save',
    '(public) @ember-data/store RecordArray#type',
    '(public) @ember-data/store RecordArray#update',
    '(public) @ember-data/store RecordArrayManager#createAdapterPopulatedRecordArray',
    '(public) @ember-data/store RecordArrayManager#createRecordArray',
    '(public) @ember-data/store RecordArrayManager#getRecordArraysForIdentifier',
    '(public) @ember-data/store RecordArrayManager#liveRecordArrayFor',
    '(public) @ember-data/store RecordArrayManager#unregisterRecordArray',
    '(public) @ember-data/store RecordReference#id',
    '(public) @ember-data/store RecordReference#load',
    '(public) @ember-data/store RecordReference#push',
    '(public) @ember-data/store RecordReference#reload',
    '(public) @ember-data/store RecordReference#remoteType',
    '(public) @ember-data/store RecordReference#value',
    '(public) @ember-data/store Reference#link',
    '(public) @ember-data/store Reference#meta',
    '(public) @ember-data/store Reference#remoteType',
    '(public) @ember-data/store Snapshot#adapterOptions',
    '(public) @ember-data/store Snapshot#attr',
    '(public) @ember-data/store Snapshot#attributes',
    '(public) @ember-data/store Snapshot#belongsTo',
    '(public) @ember-data/store Snapshot#changedAttributes',
    '(public) @ember-data/store Snapshot#eachAttribute',
    '(public) @ember-data/store Snapshot#eachRelationship',
    '(public) @ember-data/store Snapshot#hasMany',
    '(public) @ember-data/store Snapshot#id',
    '(public) @ember-data/store Snapshot#include',
    '(public) @ember-data/store Snapshot#modelName',
    '(public) @ember-data/store Snapshot#record',
    '(public) @ember-data/store Snapshot#serialize',
    '(public) @ember-data/store Snapshot#type',
    '(public) @ember-data/store SnapshotRecordArray#adapterOptions',
    '(public) @ember-data/store SnapshotRecordArray#include',
    '(public) @ember-data/store SnapshotRecordArray#length',
    '(public) @ember-data/store SnapshotRecordArray#meta',
    '(public) @ember-data/store SnapshotRecordArray#snapshots',
    '(public) @ember-data/store SnapshotRecordArray#type',
    '(public) @ember-data/store Store#adapter',
    '(public) @ember-data/store Store#adapterFor',
    '(public) @ember-data/store Store#createRecord',
    '(public) @ember-data/store Store#deleteRecord',
    '(public) @ember-data/store Store#findAll',
    '(public) @ember-data/store Store#findRecord',
    '(public) @ember-data/store Store#getReference',
    '(public) @ember-data/store Store#hasRecordForId',
    '(public) @ember-data/store Store#modelFor',
    '(public) @ember-data/store Store#normalize',
    '(public) @ember-data/store Store#peekAll',
    '(public) @ember-data/store Store#peekRecord',
    '(public) @ember-data/store Store#push',
    '(public) @ember-data/store Store#pushPayload',
    '(public) @ember-data/store Store#query',
    '(public) @ember-data/store Store#queryRecord',
    '(public) @ember-data/store Store#serializerFor',
    '(public) @ember-data/store Store#unloadAll',
    '(public) @ember-data/store Store#unloadRecord',
    '(public) Ember.HTMLBars.helpers#pluralize',
    '(public) Ember.HTMLBars.helpers#singularize',
    '(public) Ember.Inflector#disableCache;',
    '(public) Ember.Inflector#enableCache',
    '(public) Ember.Inflector#irregular',
    '(public) Ember.Inflector#plural',
    '(public) Ember.Inflector#pluralize',
    '(public) Ember.Inflector#purgedCache',
    '(public) Ember.Inflector#singular',
    '(public) Ember.Inflector#singularize',
    '(public) Ember.Inflector#uncountable',
    '(public) String#pluralize',
    '(public) String#singularize',
  ],
};
