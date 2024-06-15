type LinkedAccount = {
  accountId: string;
  externalAuthEnv?: string;
  identityProviderId: string;
  displayName?: string;
};

export type AccountInformations = {
  accountId: string;
  displayName: string;
  linkedAccounts: LinkedAccount[];
  preferredLanguage: string;
};

export type FriendsResponse = {
  data: {
    Friends: {
      summary: {
        friends: {
          account: {
            id: string;
            displayName?: string;
            displayNameType?: string;
            externalAuths: {
              type: string;
              externalAuthId?: string;
              externalAuthIdType: string;
              externalDisplayName?: string;
              authIds: {
                id: string;
                type: string;
                typename: string;
              }[];
              typename: string;
            }[];
            typename: string;
          }[];
          typename: string;
        }[];
        incoming: {
          account: {
            id: string;
            displayName: string;
            displayNameType: any;
            externalAuths: {
              type: string;
              externalAuthId?: string;
              externalAuthIdType: string;
              externalDisplayName?: string;
              authIds: {
                id: string;
                type: string;
                typename: string;
              }[];
              typename: string;
            }[];
            typename: string;
          }[];
          typename: string;
        }[];
        outgoing: {
          account: {
            id: string;
            displayName?: string;
            displayNameType?: string;
            externalAuths: {
              type: string;
              externalAuthId?: string;
              externalAuthIdType: string;
              externalDisplayName?: string;
              authIds: {
                id: string;
                type: string;
                typename: string;
              }[];
              typename: string;
            }[];
            typename: string;
          }[];
          typename: string;
        }[];
        blocklist: {
          account: {
            id: string;
            displayName: string;
            displayNameType?: string;
            externalAuths: {
              type: string;
              externalAuthId?: string;
              externalAuthIdType: string;
              externalDisplayName?: string;
              authIds: {
                id: string;
                type: string;
                typename: string;
              }[];
              typename: string;
            }[];
            typename: string;
          }[];
          typename: string;
        }[];
        typename: string;
      };
      typename: string;
    };
  };
  extensions: {};
};

export type ExchangeCodeResponse = {
  code: string;
  consumingClientId: string;
  creatingClientId: string;
  expiresInSeconds: number;
};

export type AuthResponseV1 = {
  access_token: string;
  deployment_id: string;
  expires_at: string;
  expires_in: number;
  features: string[];
  id_token: string;
  nonce: string;
  organization_id: string;
  organization_user_id: string;
  product_id: string;
  product_user_id: string;
  product_user_id_created: boolean;
  sandbox_id: string;
  token_type: string;
};

export type AuthResponseV2 = {
  access_token: string;
  account_id: string;
  acr: string;
  application_id: string;
  auth_time: string;
  client_id: string;
  expires_at: string;
  expires_in: number;
  id_token: string;
  merged_accounts: string[];
  refresh_expires_at: string;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  selected_account_id: string;
  token_type: string;
};

export type AccessTokenResponse = {
  access_token: string;
  deployment_id: string;
  expires_at: string;
  expires_in: number;
  features: string[];
  organization_id: string;
  product_id: string;
  sandbox_id: string;
  token_type: string;
};

export interface EOSSdkConfig {
  client: Client;
  services: Services;
  watermark: number;
}

export interface Client {
  "RateLimiter.InventoryClient": RateLimiterInventoryClient;
  BaseService: BaseService;
  "RateLimiter.AuthClient": RateLimiterAuthClient;
  "RateLimiter.PresenceClient.Operations": RateLimiterPresenceClientOperations;
  "RateLimiter.ReceiptValidatorClient": RateLimiterReceiptValidatorClient;
  "RateLimiter.LeaderboardsClient": RateLimiterLeaderboardsClient;
  "RateLimiter.MetricsClient": RateLimiterMetricsClient;
  "RateLimiter.StatsClient": RateLimiterStatsClient;
  "RateLimiter.SDKConfigClient.Operations": RateLimiterSdkconfigClientOperations;
  "RateLimiter.WorldInventoryClient": RateLimiterWorldInventoryClient;
  "RateLimiter.TitleStorageClient": RateLimiterTitleStorageClient;
  "RateLimiter.EcomClient": RateLimiterEcomClient;
  "RateLimiter.DataStorageClient.Operations": RateLimiterDataStorageClientOperations;
  LeaderboardsClient: LeaderboardsClient;
  "RateLimiter.CustomInvitesClient.Operations": RateLimiterCustomInvitesClientOperations;
  HTTP: Http;
  "RateLimiter.FriendClient.Operations": RateLimiterFriendClientOperations;
  "RateLimiter.RTCAdminClient": RateLimiterRtcadminClient;
  "RateLimiter.UserInfoClient": RateLimiterUserInfoClient;
  "/Script/Engine.NetworkSettings": ScriptEngineNetworkSettings;
  "WebSockets.LibWebSockets": WebSocketsLibWebSockets;
  StatsClient: StatsClient;
  "RateLimiter.MetricsClient.Operations": RateLimiterMetricsClientOperations;
  "RateLimiter.DataStorageClient": RateLimiterDataStorageClient;
  WorldInventoryClient: WorldInventoryClient;
  SanitizerClient: SanitizerClient;
  "RateLimiter.ModsClient.Operations": RateLimiterModsClientOperations;
  "RateLimiter.ReportsClient.Operations": RateLimiterReportsClientOperations;
  "RateLimiter.RTCAdminClient.Operations": RateLimiterRtcadminClientOperations;
  "RateLimiter.FriendClient": RateLimiterFriendClient;
  "RateLimiter.AchievementsClient": RateLimiterAchievementsClient;
  LogFiles: LogFiles;
  RateLimiter: RateLimiter;
  "RateLimiter.AntiCheatClient": RateLimiterAntiCheatClient;
  "RateLimiter.ProgressionSnapshot": RateLimiterProgressionSnapshot;
  SessionsClient: SessionsClient;
  "RateLimiter.WorldInventoryClient.Operations": RateLimiterWorldInventoryClientOperations;
  "InventoryClient.WorldInventory": InventoryClientWorldInventory;
  "RateLimiter.UserInfoClient.Operations": RateLimiterUserInfoClientOperations;
  LobbyClient: LobbyClient;
  "RateLimiter.SanctionsClient.Operations": RateLimiterSanctionsClientOperations;
  "UIClient.SocialURLQueryParamNames": UiclientSocialUrlqueryParamNames;
  "RateLimiter.LobbyClient.ThrottledOperations": RateLimiterLobbyClientThrottledOperations;
  "RateLimiter.SessionsClient": RateLimiterSessionsClient;
  "RateLimiter.KWSClient": RateLimiterKwsclient;
  "RateLimiter.PresenceClient": RateLimiterPresenceClient;
  "RateLimiter.KWSClient.Operations": RateLimiterKwsclientOperations;
  "RateLimiter.InventoryClient.Operations": RateLimiterInventoryClientOperations;
  "RateLimiter.LeaderboardsClient.Operations": RateLimiterLeaderboardsClientOperations;
  "RateLimiter.SanctionsClient": RateLimiterSanctionsClient;
  "Messaging.EpicConnect": MessagingEpicConnect;
  MetricsClient: MetricsClient;
  "RateLimiter.TitleStorageClient.Operations": RateLimiterTitleStorageClientOperations;
  "RateLimiter.AchievementsClient.Operations": RateLimiterAchievementsClientOperations;
  "Messaging.Stomp": MessagingStomp;
  TitleStorageClient: TitleStorageClient;
  ConnectClient: ConnectClient;
  "RateLimiter.LobbyClient.Operations": RateLimiterLobbyClientOperations;
  "RateLimiter.AntiCheatClient.Operations": RateLimiterAntiCheatClientOperations;
  EcomClient: EcomClient;
  "RateLimiter.SessionsClient.Operations": RateLimiterSessionsClientOperations;
  "RateLimiter.StatsClient.Operations": RateLimiterStatsClientOperations;
  "RateLimiter.ReceiptValidatorClient.Operations": RateLimiterReceiptValidatorClientOperations;
  DataStorageClient: DataStorageClient;
  "RateLimiter.AuthClient.Operations": RateLimiterAuthClientOperations;
  InventoryClient: InventoryClient;
  P2PClient: P2Pclient;
  "RateLimiter.LobbyClient": RateLimiterLobbyClient;
  SDKAnalytics: Sdkanalytics;
  "RateLimiter.ConnectClient": RateLimiterConnectClient;
  "AntiCheat.GameplayData": AntiCheatGameplayData;
  AuthClient: AuthClient;
  "RateLimiter.ProgressionSnapshot.Operations": RateLimiterProgressionSnapshotOperations;
  XMPP: Xmpp;
  "RateLimiter.AntiCheatServer.Operations": RateLimiterAntiCheatServerOperations;
  "Core.Log": CoreLog;
  UIClient: Uiclient;
  "RateLimiter.AntiCheatServer": RateLimiterAntiCheatServer;
  "RateLimiter.InventoryClient.WorldInventory.Operations": RateLimiterInventoryClientWorldInventoryOperations;
  "Messaging.XMPP": MessagingXmpp;
  "RateLimiter.SDKConfigClient": RateLimiterSdkconfigClient;
  "RateLimiter.EcomClient.Operations": RateLimiterEcomClientOperations;
  PresenceClient: PresenceClient;
  "RateLimiter.CustomInvitesClient": RateLimiterCustomInvitesClient;
  "RateLimiter.ModsClient": RateLimiterModsClient;
  "RateLimiter.ConnectClient.Operations": RateLimiterConnectClientOperations;
  "RateLimiter.AuthClient.SensitiveOperations": RateLimiterAuthClientSensitiveOperations;
  "RateLimiter.ReportsClient": RateLimiterReportsClient;
}

export interface RateLimiterInventoryClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface BaseService {
  HttpRetryLimit: number;
  HttpRetryResponseCodes: number[];
}

export interface RateLimiterAuthClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterPresenceClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterReceiptValidatorClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterLeaderboardsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterMetricsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterStatsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterSdkconfigClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterWorldInventoryClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterTitleStorageClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterEcomClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterDataStorageClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface LeaderboardsClient {
  MaxUserScoresQueryUserIds: number;
  MaxUserScoresQueryStats: number;
}

export interface RateLimiterCustomInvitesClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface Http {
  HttpReceiveTimeout: number;
  bEnableHttp: boolean;
  HttpTimeout: number;
  HttpConnectionTimeout: number;
  HttpSendTimeout: number;
  MaxFlushTimeSeconds: number;
}

export interface RateLimiterFriendClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterRtcadminClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterUserInfoClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface ScriptEngineNetworkSettings {
  "n.VerifyPeer": boolean;
}

export interface WebSocketsLibWebSockets {
  ThreadStackSize: number;
  ThreadTargetFrameTimeInSeconds: number;
  ThreadMinimumSleepTimeInSeconds: number;
}

export interface StatsClient {
  MaxQueryStatsStatNamesStrLength: number;
}

export interface RateLimiterMetricsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterDataStorageClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface WorldInventoryClient {
  MaxNumberOfParallelUpdateRequestsInFlight: number;
  SessionLockTTLSeconds: number;
  MaxNumberOfParallelQueryRequestsInFlight: number;
  MaxNumberOfLockEntriesPerRequest: number;
  MaxNumberOfWriteEntriesPerRequest: number;
  SessionLockUpdateIntervalRandomAddSeconds: number;
  MaxNumberOfParallelLockRequestsInFlight: number;
  SessionLockUpdateIntervalSeconds: number;
  MaxNumberOfSubTasksPerParallelUpdateTask: number;
  MaxNumberOfSubTasksPerParallelLockTask: number;
  QueryInventoryPageLimit: number;
  MaxBinaryDataSizeBytes: number;
  HttpRetryResponseCodes: number[];
  LockType: string;
}

export interface SanitizerClient {
  ReplaceChar: string;
  RequestLimit: number;
}

export interface RateLimiterModsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterReportsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterRtcadminClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterFriendClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterAchievementsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface LogFiles {
  PurgeLogsDays: number;
  MaxLogFilesOnDisk: number;
  LogTimes: string;
}

export interface RateLimiter {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterAntiCheatClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterProgressionSnapshot {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface SessionsClient {
  HeartbeatIntervalSecs: number;
}

export interface RateLimiterWorldInventoryClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface InventoryClientWorldInventory {
  MaxNumberOfParallelUpdateRequestsInFlight: number;
  SessionLockTTLSeconds: number;
  MaxNumberOfParallelQueryRequestsInFlight: number;
  MaxNumberOfLockEntriesPerRequest: number;
  MaxNumberOfWriteEntriesPerRequest: number;
  SessionLockUpdateIntervalRandomAddSeconds: number;
  MaxNumberOfParallelLockRequestsInFlight: number;
  SessionLockUpdateIntervalSeconds: number;
  MaxNumberOfSubTasksPerParallelUpdateTask: number;
  MaxNumberOfSubTasksPerParallelLockTask: number;
  QueryInventoryPageLimit: number;
  MaxBinaryDataSizeBytes: number;
  LockType: string;
}

export interface RateLimiterUserInfoClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface LobbyClient {
  InitialResendDelayMs: number;
  MaxConnectionRetries: number;
  LobbySocketURL: string;
  NumConsecutiveFailuresAllowed: number;
  MaxResendDelayMs: number;
  WebSocketConnectTaskMaxNetworkWaitSeconds: number;
  RecoveryWaitTimeSecs: number;
  InitialRetryDelaySeconds: number;
  MaxSendRetries: number;
  SentMessageTimeout: number;
  HeartbeatIntervalSecs: number;
  MaxRetryIntervalSeconds: number;
}

export interface RateLimiterSanctionsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface UiclientSocialUrlqueryParamNames {
  OSName: string;
  ProductId: string;
  SDKCLNumber: string;
  DeploymentId: string;
  IntegratedPlatformName: string;
  SDKVersion: string;
  OSVersion: string;
  UserId: string;
  ExchangeCode: string;
}

export interface RateLimiterLobbyClientThrottledOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterSessionsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterKwsclient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterPresenceClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterKwsclientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterInventoryClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterLeaderboardsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterSanctionsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface MessagingEpicConnect {
  FailedConnectionDelayMultiplier: number;
  ServerHeartbeatIntervalMilliseconds: number;
  FailedConnectionDelayMaxSeconds: number;
  ClientHeartbeatIntervalMilliseconds: number;
  FailedConnectionDelayIntervalSeconds: number;
  Url: string;
}

export interface MetricsClient {
  HttpRetryLimit: number;
}

export interface RateLimiterTitleStorageClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterAchievementsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface MessagingStomp {
  ClientHeartbeatIntervalMs: number;
  RequestedServerHeartbeatIntervalMs: number;
  Url: string;
  BlocklistMessageTypeFilters: string[];
}

export interface TitleStorageClient {
  AccessLinkDurationSeconds: number;
  UnusedCachedFileDaysToLive: number;
  ClearInvalidFileCacheFrequencyDays: number;
  MaxSimultaneousReads: number;
}

export interface ConnectClient {
  MaxProductUserIdMappingsQueryUserIds: number;
  MinProductUserIdMappingsUpdateTimeInSeconds: number;
}

export interface RateLimiterLobbyClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterAntiCheatClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface EcomClient {
  PurchaseUrl: string;
  PurchaseCookieName: string;
  PurchaseEpicIdUrl: string;
}

export interface RateLimiterSessionsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterStatsClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterReceiptValidatorClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface DataStorageClient {
  AccessLinkDurationSeconds: number;
  MaxSimultaneousReads: number;
  MaxSimultaneousWrites: number;
}

export interface RateLimiterAuthClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface InventoryClient {
  MaxNumberOfParallelUpdateRequestsInFlight: number;
  SessionLockTTLSeconds: number;
  MaxNumberOfLockEntriesPerRequest: number;
  MaxNumberOfWriteEntriesPerRequest: number;
  SessionLockUpdateIntervalRandomAddSeconds: number;
  MaxNumberOfParallelLockRequestsInFlight: number;
  SessionLockUpdateIntervalSeconds: number;
  MaxNumberOfSubTasksPerParallelLockTask: number;
  HttpRetryResponseCodes: number[];
  LockType: string;
  BaseUrl: string;
  MaxNumberOfSubTasksPerParallelUpdateTask: number;
  QueryInventoryPageLimit: number;
  HttpRetryVerbs: string[];
}

export interface P2Pclient {
  IceServers: string[];
  P2PMinPort: number;
  P2PMaxPort: number;
}

export interface RateLimiterLobbyClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface Sdkanalytics {
  BaseUrl: string;
  DevPhase: number;
  AppEnvironment: string;
  UploadType: string;
}

export interface RateLimiterConnectClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface AntiCheatGameplayData {
  Url: string;
}

export interface AuthClient {
  AccountPortalURLLocaleSuffix: string;
  PollInterval: number;
  RefreshTokenThreshold: number;
  VPCRegisterURL: string;
  AuthorizeContinuationEndpoint: string;
  AuthorizeCodeEndpoint: string;
  VerifyTokenInterval: number;
  PollExpiresIn: number;
  IdTokenCacheMinExpirySeconds: number;
  AuthorizeEndpoint: string;
  AccountPortalScheme: string;
  bOfflineAccountToken: boolean;
  bFailLoginIfExternalAccountIdDoesNotMatchAuthToken: boolean;
  AuthorizeContinuationEmbeddedEndpoint: string;
}

export interface RateLimiterProgressionSnapshotOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface Xmpp {
  bEnabled: boolean;
  bEnableWebsockets: boolean;
  ThreadStackSize: number;
}

export interface RateLimiterAntiCheatServerOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface CoreLog {
  LogEOS: string;
  LogEOSMessaging: string;
  LogEOSConnect: string;
  LogEOSAuth: string;
  LogHttpSerialization: string;
  LogCore: string;
  LogHttp: string;
  LogStomp: string;
  LogXmpp: string;
  LogEOSSessions: string;
}

export interface Uiclient {
  FriendsURL: string;
  SocialSPAClientId: string;
  VPCURLLocaleSuffix: string;
  FriendsURLExchangeCodeSuffix: string;
  VPCURL: string;
}

export interface RateLimiterAntiCheatServer {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterInventoryClientWorldInventoryOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface MessagingXmpp {
  ReconnectionDelayJitter: number;
  PingTimeout: number;
  ReconnectionDelayBase: number;
  ServerPort: number;
  bPrivateChatFriendsOnly: boolean;
  ReconnectionDelayMax: number;
  Domain: string;
  ReconnectionDelayBackoffExponent: number;
  ServerAddr: string;
  PingInterval: number;
}

export interface RateLimiterSdkconfigClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterEcomClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface PresenceClient {
  EpicConnectNotificationWaitTime: number;
  PresenceQueryTimeoutSeconds: number;
  bSetOfflineOnLogoutEnabled: boolean;
  PresenceAutoUpdateInSeconds: number;
  bSetOfflineOnShutdownEnabled: boolean;
}

export interface RateLimiterCustomInvitesClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterModsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface RateLimiterConnectClientOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterAuthClientSensitiveOperations {
  MessageCount: number;
  TimeIntervalInSeconds: number;
  Operation: string[];
}

export interface RateLimiterReportsClient {
  MessageCount: number;
  TimeIntervalInSeconds: number;
}

export interface Services {
  RTCService: Rtcservice;
  DataStorageService: DataStorageService;
  AccountsEpicIdService: AccountsEpicIdService;
  MetricsService: MetricsService;
  EcommerceService: EcommerceService;
  AntiCheatService: AntiCheatService;
  LobbyService: LobbyService;
  StatsAchievementsService: StatsAchievementsService;
  PriceEngineService: PriceEngineService;
  AccountsService: AccountsService;
  EcommerceEpicIdService: EcommerceEpicIdService;
  PaymentEpicIdService: PaymentEpicIdService;
  SanctionsService: SanctionsService;
  FriendService: FriendService;
  TextChatTrustedServerFNService: TextChatTrustedServerFnservice;
  ReceiptValidatorService: ReceiptValidatorService;
  FriendEpicIdService: FriendEpicIdService;
  CatalogService: CatalogService;
  KWSService: Kwsservice;
  TextChatFNService: TextChatFnservice;
  EOSAuthService: EosauthService;
  SessionsService: SessionsService;
  ModsService: ModsService;
  ReportsService: ReportsService;
  ProgressionSnapshotService: ProgressionSnapshotService;
  CustomInvitesService: CustomInvitesService;
  PresenceService: PresenceService;
  TitleStorageService: TitleStorageService;
  StatsIngestService: StatsIngestService;
  LeaderboardsService: LeaderboardsService;
  InventoryService: InventoryService;
}

export interface Rtcservice {
  BaseUrl: string;
}

export interface DataStorageService {
  BaseUrl: string;
}

export interface AccountsEpicIdService {
  BaseUrl: string;
}

export interface MetricsService {
  BaseUrl: string;
}

export interface EcommerceService {
  BaseUrl: string;
}

export interface AntiCheatService {
  BaseUrl: string;
}

export interface LobbyService {
  BaseUrl: string;
}

export interface StatsAchievementsService {
  BaseUrl: string;
}

export interface PriceEngineService {
  BaseUrl: string;
}

export interface AccountsService {
  BaseUrl: string;
  RedirectUrl: string;
}

export interface EcommerceEpicIdService {
  BaseUrl: string;
}

export interface PaymentEpicIdService {
  BaseUrl: string;
}

export interface SanctionsService {
  BaseUrl: string;
}

export interface FriendService {
  BaseUrl: string;
}

export interface TextChatTrustedServerFnservice {
  BaseUrl: string;
}

export interface ReceiptValidatorService {
  BaseUrl: string;
}

export interface FriendEpicIdService {
  BaseUrl: string;
}

export interface CatalogService {
  BaseUrl: string;
}

export interface Kwsservice {
  BaseUrl: string;
}

export interface TextChatFnservice {
  BaseUrl: string;
}

export interface EosauthService {
  BaseUrl: string;
}

export interface SessionsService {
  BaseUrl: string;
}

export interface ModsService {
  BaseUrl: string;
}

export interface ReportsService {
  BaseUrl: string;
}

export interface ProgressionSnapshotService {
  BaseUrl: string;
}

export interface CustomInvitesService {
  BaseUrl: string;
}

export interface PresenceService {
  BaseUrl: string;
}

export interface TitleStorageService {
  BaseUrl: string;
}

export interface StatsIngestService {
  BaseUrl: string;
}

export interface LeaderboardsService {
  BaseUrl: string;
}

export interface InventoryService {
  BaseUrl: string;
}
